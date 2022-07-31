<script>
    import NoteButton from "./NoteButton.svelte";
    import { createEventDispatcher } from 'svelte';
    import { darkmode } from '../store/store.js';

    export let id, title, color, text;

    const dispatch = createEventDispatcher();

    function handleChange() {
        dispatch('update', {
            id: id,
            text: text,
            color: color,
            title: title
        });
    }
    
    function handleColor() {
        dispatch('color', {
            id: id
        });
    }

    function handleRemove() {
        dispatch('remove', {
            id: id
        });
    }
</script>

<div class="note { $darkmode ? 'note-dark' : '' }">
    <div class="note-container" style={ $darkmode ? 'background-color: #232531' : 'background-color: ' + color }>
        <section class="header" style={ 'background-color: ' + color }>
            <article class="options">
                <NoteButton type={ 'palette' } on:click={ handleColor }/>
                <NoteButton type={ 'delete' } on:click={ handleRemove }/>
            </article>
        </section>

        <section class="content">
            <article class="title">
                <input type="text" 
                placeholder="Sin titulo..." 
                bind:value={ title }
                on:change={ handleChange }/>
            </article>

            <article class="text">
                <textarea rows="10" 
                placeholder="Escribir..." 
                bind:value={ text }
                on:change={ handleChange }></textarea>
            </article>
        </section>
    </div>
</div>

<style>
    .note {
        height: 400px;
        border: 2px solid transparent;
        border-radius: 0.25rem;
        background-color: #fff;
        overflow: hidden;
    }

    .note-dark {
        border: 2px solid #000;
    }

    .note-container {
        height: 100%;
    }

    .note:focus-within {
        border: 2px solid #000;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .note-dark:focus-within {
        border: 2px solid cyan;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .header {
        padding: 5px;
    }
    
    .header .options {
        display: flex;
        justify-content: space-between;
    }

    .note .content {
        padding: 0 1.25rem;
    }

    .title input {
        outline: none;
        width: 100%;
        padding: 0.5rem 0;
        border: none;
        font-size: 1.25rem;
        font-weight: bold;
    }

    .text textarea {
        outline: none;
        width: 100%;
        height: 250px;
        border: 0;
        resize: none;
        font-size: 1.125rem;
        line-height: 1.15rem;
    }

    input, textarea {
        background-color: transparent;
    }
</style>