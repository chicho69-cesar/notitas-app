<script>
    import { auth } from '../firebase/firebase.js';
    import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
    import { user, isLoggedIn, darkmode } from '../store/store.js';
    import { navigate } from 'svelte-routing';

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const response = await signInWithPopup(auth, provider);

            $user = response.user;
            $isLoggedIn = true;

            navigate("/", { replace: true });
        } catch(error) {
            console.error(error);
        }
    }

    const loginWithFacebook = async () => {
        try {
            const provider = new FacebookAuthProvider();
            const response = await signInWithPopup(auth, provider);

            $user = response.user;
            $isLoggedIn = true;

            navigate("/", { replace: true });
        } catch(error) {
            console.error(error);
        }
    }
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<main class={ $darkmode ? 'darkmode' : '' }>
    <button on:click={ loginWithGoogle }>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg> 
        Iniciar sesion con Google
    </button>

    <button on:click={ loginWithFacebook }>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><radialGradient id="nT5WH7nXAOiS46rXmee3Oa" cx="33.34" cy="27.936" r="43.888" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f4e9c3"/><stop offset=".219" stop-color="#f8eecd"/><stop offset=".644" stop-color="#fdf4dc"/><stop offset="1" stop-color="#fff6e1"/></radialGradient><path fill="url(#nT5WH7nXAOiS46rXmee3Oa)" d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z"/><linearGradient id="nT5WH7nXAOiS46rXmee3Ob" x1="32" x2="32" y1="-3.34" y2="59.223" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#155cde"/><stop offset=".278" stop-color="#1f7fe5"/><stop offset=".569" stop-color="#279ceb"/><stop offset=".82" stop-color="#2cafef"/><stop offset="1" stop-color="#2eb5f0"/></linearGradient><path fill="url(#nT5WH7nXAOiS46rXmee3Ob)" d="M58,32c0,13.35-10.05,24.34-23,25.83C34.02,57.94,33.01,58,32,58c-1.71,0-3.38-0.17-5-0.49	C15.03,55.19,6,44.65,6,32C6,17.64,17.64,6,32,6S58,17.64,58,32z"/><path fill="#fff" d="M42.8,36.05l-0.76,2C41.6,39.22,40.46,40,39.19,40H35v17.83C34.02,57.94,33.01,58,32,58	c-1.71,0-3.38-0.17-5-0.49V40h-2.95C22.36,40,21,38.66,21,37v-2c0-1.66,1.36-3,3.05-3H27v-6c0-5.51,4.49-10,10-10h3	c2.21,0,4,1.79,4,4s-1.79,4-4,4h-3c-1.1,0-2,0.9-2,2v6h4.95C42.08,32,43.55,34.09,42.8,36.05z"/></svg> 
        Iniciar sesion con Facebook
    </button>
</main>

<style>
    main {
        display: grid;
        place-content: center;
        gap: 2rem;
    }

    button {
        cursor: pointer;
        width: 320px;
        border: none;
        border-radius: 0.35rem;
        background-color: #252525;
        color: #fff;
        font-size: 1.125rem;
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.25);
        transition: box-shadow 0.25s ease, transform 0.25s ease;
    }

    button:hover {
        box-shadow: none;
        transform: translateY(-1.5px);
    }

    .darkmode button {
        background-color: #fff;
        color: #252525;
    }

    svg {
        width: 48px;
        height: 48px;
    }
</style>