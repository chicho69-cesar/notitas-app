<script>
    import { signOut, onAuthStateChanged } from 'firebase/auth';
    import { auth } from '../firebase/firebase.js';
    import { user, isLoggedIn, darkmode } from '../store/store.js';
    import { navigate } from 'svelte-routing';

    const logout = async () => {
        try {
            signOut(auth);

            $user = {};
            $isLoggedIn = false;

            location.reload();
            navigate("/login", { replace: true });
        } catch(error) {
            console.error(error);
        }
    }

    onAuthStateChanged(auth, authUser => {
        $user = authUser;
        $isLoggedIn = !!authUser;
    });
</script>

{#if $isLoggedIn}
    <div class="logout { $darkmode ? 'dark' : '' }">
        <button class="logout" on:click={ logout }>
            logout
        </button>
    </div>
{/if}

<style>
    button {
        cursor: pointer;
        background: transparent;
        border: none;
        font-size: 1.125rem;
    }

    button:hover {
        opacity: 0.9;
    }

    .dark button {
        color: #fff;
    }
</style>