import { writable } from 'svelte/store';

const getTheme = () => {
    const theme = localStorage.getItem('darkmode');
    return theme ? theme === 'true' : true;
}

const setTheme = () => {
    const { subscribe, update, set } = writable(getTheme());

    return {
        subscribe,
        change: () => update(theme => {
            if (getTheme()) {
                localStorage.setItem('darkmode', 'false');
            } else {
                localStorage.setItem('darkmode', 'true');
            }

            return !theme;
        }),
        apply: theme => set(theme)
    };
}

export const darkmode = setTheme();
export const user = writable({});
export const isLoggedIn = writable(false);