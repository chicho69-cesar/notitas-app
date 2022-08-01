<script>
    import Logout from './Logout.svelte';
    import HeaderProfile from './HeaderProfile.svelte';
    import Switch from './Switch.svelte';
</script>

<div class="settings">
    <Logout/>
    <HeaderProfile/>
    <Switch/>
</div>

<style>
    .settings {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
        justify-content: flex-end;
        align-items: center;
    }
</style>