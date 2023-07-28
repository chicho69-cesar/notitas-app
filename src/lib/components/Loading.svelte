<div class='center'>
  <div class='ring' />
  <span>Loading...</span>
</div>

<style>
  .center {
    width: 100%;
    height: 100%;
    margin-top: 3rem;
    text-align: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  .ring {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: ring 2s linear infinite;
  }

  .ring:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }

  span {
    color: #909090;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 200px;
    animation: text 3s ease-in-out infinite;
  }

  @keyframes ring {
    0% {
      transform: rotate(0deg);
      box-shadow: 1px 5px 2px #e65c00;
    }

    50% {
      transform: rotate(180deg);
      box-shadow: 1px 5px 2px #18b201;
    }

    100% {
      transform: rotate(360deg);
      box-shadow: 1px 5px 2px #0456c8;
    }
  }

  @keyframes text {
    50% {
      color: #000;
    }
  }
</style>
