<script>
    import Index from "./components/Index.svelte";
    import Login from "./components/Login.svelte";
    import { onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import { Router, Route, navigate } from "svelte-routing";
    import { user, isLoggedIn } from './store/store.js';
    import { auth } from "./firebase/firebase";

    onAuthStateChanged(auth, authUser => {
        $user = authUser;
        $isLoggedIn = !!authUser;
    });
    
    onMount(() => {
        if (!$isLoggedIn) {
            navigate("/login", { replace: true });
        }
    });
</script>

<Router>
    <Route path='/' component="{ Index }"/>
    <Route path='/login' component="{ Login }"/>
</Router>