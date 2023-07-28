<script>
  export let type = 'palette'
</script>

{#if type === 'palette'}
  <button on:click>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" /><path
        d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 
            9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 
            2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 
            0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"
      />
      <circle cx="6.5" cy="11.5" r="1.5" /><circle cx="9.5" cy="7.5" r="1.5" />
      <circle cx="14.5" cy="7.5" r="1.5" /><circle
        cx="17.5"
        cy="11.5"
        r="1.5"
      />
    </svg>
  </button>
{:else}
  <button on:click>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" /><path
        d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 
            7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
      />
    </svg>
  </button>
{/if}

<style>
  button {
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  button:focus {
    background-color: transparent;
  }

  button svg {
    fill: rgba(0, 0, 0, 0.5);
  }

  button:hover svg {
    fill: #000;
  }
</style>
