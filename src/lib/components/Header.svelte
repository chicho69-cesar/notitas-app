<script>
  import Logo from './Logo.svelte'
  import Search from './Search.svelte'
  import Settings from './Settings.svelte'
</script>

<header class='header'>
  <Logo appName={'Notitas App'} />
  <Search on:input />
  <Settings />
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.25rem;
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
  }
  
  :global(main.darkmode > .header) {
    background-color: rgba(37, 37, 37, 0.8);
  }
</style>
