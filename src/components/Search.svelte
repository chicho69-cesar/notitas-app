<script>
    let query = '';
</script>

<div class="search">
    <div class="search-container">
        <input type="text" placeholder="Buscar..." bind:value={ query } on:input/>
    </div>
</div>

<style>
    input {
        width: 500px;
        height: 40px;
        max-width: 500px;
        min-width: 200px;
        line-height: 40px;
        outline: none;
        border-radius: 0.25rem;
        text-align: center;
        font-size: 1.25rem;
    }

    @media screen and (max-width: 1096px) {
        input {
            width: 400px;
        }
    }

    @media screen and (max-width: 900px) {
        input {
            width: 300px;
        }
    }

    @media screen and (max-width: 600px) {
        input {
            width: 250px;
        }
    }
</style>