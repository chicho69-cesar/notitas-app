<script>
    import Logo from './Logo.svelte';
    import Search from './Search.svelte';
    import Settings from './Settings.svelte';
</script>

<div class="header">
    <Logo appName={ 'Notitas App' }/>
    <Search on:input/>
    <Settings/>
</div>

<style>
    .header {
        padding: 0.75rem;
        border-radius: 0.25rem;
        display: flex;
        flex-flow: row nowrap;
        gap: 1rem;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    }
</style>