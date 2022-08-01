<script>
    // @ts-nocheck
    import { user, isLoggedIn } from '../store/store.js';
</script>

{#if $isLoggedIn}
    <div class="profile">
        <img src={ $user.photoURL } 
        alt={ $user.displayName } 
        title={ $user.displayName }
        class="img-profile"/>
    </div>
{/if}

<style>
    .img-profile {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }
</style>