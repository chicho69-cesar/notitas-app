<script>
    import Note from './Note.svelte';
    import NotePlaceholder from './NotePlaceholder.svelte';
    export let notes;
</script>

<div class="dashboard">
    <div class="notes-container">
        <NotePlaceholder on:click/>

        {#each notes as { id, title, color, text, user, collectionId } (id)}
            <Note { id } bind:title={ title } 
            { color } bind:text={ text } 
            bind:collectionId={ collectionId }
            bind:user={ user }
            on:update on:color on:remove/>
        {/each}
    </div>
</div>

<style>
    .dashboard {
        width: 100%;
        padding: 1.25rem;
        box-sizing: border-box;
    }

    .notes-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        gap: 0.5rem;
    }

    @media screen and (max-width: 1096px) {
        .notes-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 900px) {
        .notes-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 600px) {
        .notes-container {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>