const Hero = () => {
  return (
    <div class="banner__container">
      <div class="content">
        <h1>Tranfer Money Across World In Real Time With No Charge</h1>
        <p>
          This is my submission for my Intership project at{" "}
          <span class="highlight">The Spark Foundation</span>. Click on the Send
          Money button if you want to transfer any amount from pre-existing
          account
        </p>
        <div class="btn__container">
          <a href="/viewusers" class="btn__send">
            Send Money
          </a>
          <a href="/transectionHistory" class="btn__history">
            Transection History
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
