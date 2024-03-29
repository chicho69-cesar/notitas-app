<script>
  import { onMount } from 'svelte'
  import { v4 as uuidv4 } from 'uuid'
  import debounce from 'just-debounce-it'

  import Dashboard from './lib/components/Dashboard.svelte'
  import Header from './lib/components/Header.svelte'

  import { getData, newNote, removeNote, updateNote } from './lib/services/storage'
  import { darkmode } from './lib/store/store.js'
	import { generateColor } from './lib/helpers/generate-colors';

  let notes = []
  let copyNotes = [...notes]
  $: count = notes.length

  onMount(async () => {
    const data = await getData()

    notes = [...data.notes]
    copyNotes = [...notes]

    darkmode.apply(data.settings.darkmode)
  })

  const handleNew = () => {
    const color = generateColor()
    const id = uuidv4()
    const note = { id: id, title: '', color: color, text: '' }

    newNote(note)

    notes = [note, ...notes]
    copyNotes = [...notes]
  }

  const handleUpdate = (/** @type {any} */ event) => {
    const note = event.detail
    const index = notes.findIndex(n => n.id === note.id)
    
    updateNote(note)
    
    notes[index] = note
    copyNotes = [...notes]
  }

  const handleColor = (/** @type {any} */ event) => {
    const index = notes.findIndex(n => n.id === event.detail.id)
    notes[index].color = generateColor()
    copyNotes[index].color = notes[index].color

    updateNote(notes[index])
  }

  const handleRemove = (/** @type {any} */ event) => {
    const response = notes.filter(n => n.id !== event.detail.id)
    
    removeNote(event.detail.id)
    
    notes = [...response]
    copyNotes = [...notes]
  }

  const handleSearch = (/** @type {any} */ event) => {
    let query = event.target.value
    query = query.trim()
    query = query.toLowerCase()

    if (query === '') {
      copyNotes = [...notes]
      return false
    }

    const results = notes.filter((note) => {
      const title = note.title.toLowerCase()
      const text = note.text.toLowerCase()

      return title.indexOf(query) > -1 || text.indexOf(query) > -1
    })

    copyNotes = [...results]
  }

  const debounceGetNotes = debounce((/** @type {any} */ event) => {
    console.log(event.target.value)
    handleSearch(event)
  }, 300)
</script>

<main class={$darkmode ? 'darkmode' : ''}>
  <Header 
    on:input={debounceGetNotes}
  />
  
  <div class="count-notes">
    {count} Nota{count === 1 ? '' : 's'}
  </div>
  
  <Dashboard 
    bind:notes={copyNotes} 
    on:click={handleNew} 
    on:update={handleUpdate}
    on:color={handleColor}
    on:remove={handleRemove}
  />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  main {
    min-height: 100vh;
  }

  :global(main.darkmode, main.darkmode textarea) {
    background-color: rgb(37, 37, 37);
    color: #fff;
  }

  .count-notes {
    padding: 6.25rem 1.25rem 0 1.25rem;
    font-size: 1.5rem;
    text-align: right;
  }
</style>
