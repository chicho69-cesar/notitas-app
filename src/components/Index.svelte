<script>
    // @ts-nocheck
    import Header from '../components/Header.svelte';
    import Dashboard from '../components/Dashboard.svelte';
    import Loading from './Loading.svelte';
    import { onMount } from 'svelte';
    import { darkmode, user } from '../store/store.js';
    import { getData, newNote, updateNote, removeNote } from '../firebase/endpoints';
    import { v4 } from 'uuid';

    let loading = true;
    let notes = [];
    let copyNotes = [ ...notes ];
    $: count = notes.length;

    onMount(async () => {
        loading = true;
        const data = await getData();
        loading = false;

        notes = [ ...data.notes ];
        copyNotes = [ ...notes ];
        darkmode.apply(data.settings.darkmode);
    });

    async function handleNew() {
        const color = generateColor();
        const id = v4();
        const note = { id: id, title: '', color: color, text: '', user: $user.email };

        let colId = await newNote(note);

        note.collectionId = colId;

        notes = [ note, ...notes ];
        copyNotes = [ ...notes ];
    }

    function handleUpdate(e) {
        const note = e.detail;
        const index = notes.findIndex(n => n.id === note.id);
        
        updateNote(note);
        
        notes[index] = note;
        copyNotes = [ ...notes ];
    }

    function handleColor(e) {
        const index = notes.findIndex(n => n.id === e.detail.id);
        notes[index].color = generateColor();
        copyNotes[index].color = notes[index].color;

        updateNote(notes[index]);
    }

    function handleRemove(e) {
        const response = notes.filter(n => n.id !== e.detail.id);
        
        removeNote(e.detail.id);
        
        notes = [ ...response ];
        copyNotes = [ ...notes ];
    }

    function handleSearch(e) {
        let query = e.target.value;
        query = query.trim();
        query = query.toLowerCase();

        if (query === '') {
            copyNotes = [ ...notes ];
            return false;
        }

        const results = notes.filter(n => {
            const title = n.title.toLowerCase();
            const text = n.text.toLowerCase();

            return title.indexOf(query) > -1 || text.indexOf(query) > -1;
        });

        copyNotes = [ ...results ];
    }

    function generateColor() {
        const colors = [
            '#DDFFC2', '#FFC2C2', '#FFEAC2', '#C2FFD3', '#C2FFEC', '#F13157',
            '#C2FAFF', '#C2E2FF', '#CBC2FF', '#EBC2FF', '#FFC2F7', '#FFC2D8'
        ];
		const index = Math.floor(Math.random() * (colors.length));
        
		return colors[index];
    }
</script>

<main class={ $darkmode ? 'darkmode' : '' }>
    <Header on:input={ handleSearch }/>
    
    {#if loading}
       <Loading/>
    {:else}
        <div class="count-notes">
            { count } Nota{ count === 1 ? '' : 's' }
        </div>
        
        <Dashboard bind:notes={ copyNotes } 
        on:click={ handleNew } 
        on:update={ handleUpdate }
        on:color={ handleColor }
        on:remove={ handleRemove }/>
    {/if}
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    :global(main) {
        min-height: 100vh;
    }

    :global(main.darkmode, main.darkmode textarea, main.darkmode input) {
        background-color: #252525;
        color: #fff;
    }

    :global(main.darkmode > .header) {
        box-shadow: 0 0 5px rgba(75, 75, 75, 0.25);
    }

    .count-notes {
        padding: 1.25rem 1.25rem 0 1.25rem;
        font-size: 1.25rem;
        text-align: right;
    }
</style>