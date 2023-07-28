<script>
  let query = ''
</script>

<input 
  type='text' 
  placeholder='Buscar...' 
  bind:value={query} 
  on:input
/>

<style>
  input {
    width: 500px;
    height: 100%;
    max-width: 500px;
    min-width: 200px;
    outline: none;
    margin: 0;
    border: 2px solid #09f;
    border-radius: 0.5rem;
    text-align: center;
    font-size: 1.3rem;
  }

  :global(main.darkmode input) {
    background-color: rgba(20, 20, 20);
    color: #fff;
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
