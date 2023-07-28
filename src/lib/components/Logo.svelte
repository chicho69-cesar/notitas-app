<script>
  export let appName = 'Notitas App'
</script>

<div class='logo'>
  <h1>{appName}</h1>
</div>

<style>
  h1 {
    margin: 0;
    padding: 0;
    color: #09f;
  }

  @media screen and (max-width: 1096px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 600px) {
    .logo,
    h1 {
      display: none;
    }
  }
</style>
