<script>
  import { darkmode } from '../store/store.js'
  import { darkTheme } from '../services/storage.js'

  function changeTheme () {
    darkmode.change()
    darkTheme($darkmode)
  }
</script>

<div class='switch'>
  <div class={$darkmode ? 'switch-container on' : 'switch-container'}>
    <button class='circle' on:click={changeTheme} />
  </div>
</div>

<style>
  .switch-container {
    width: 50px;
    height: 25px;
    margin: 0 10px;
    border-radius: 30px;
    background-color: #aaa;
  }

  .switch-container .circle {
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: all 0.2s;
  }

  .on .circle {
    margin-left: 25px;
  }

  .on {
    background-color: #09f;
  }
</style>
