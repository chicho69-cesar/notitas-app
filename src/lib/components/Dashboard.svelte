<script>
  import Note from './Note.svelte'
  import NotePlaceholder from './NotePlaceholder.svelte'
  
  export let notes
</script>

<div class='dashboard'>
  <div class='notes-container'>
    <NotePlaceholder on:click />

    {#each notes as { id, title, color, text } (id)}
      <Note 
        {id} {color} 
        bind:title={title} 
        bind:text={text} 
        on:update 
        on:color 
        on:remove
      />
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }
</style>
