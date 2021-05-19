const Hero = () => {
  return (
    <div className="banner__container">
      <div className="content">
        <h1>Tranfer Money Across World In Real Time With No Charge</h1>
        <p>
          This is my submission for my Intership project at{" "}
          <span className="highlight">The Spark Foundation</span>. Click on the
          Send Money button if you want to transfer any amount from pre-existing
          account
        </p>
        <div className="btn__container">
          <a href="/viewusers" className="btn__send">
            Send Money
          </a>
          <a href="/transectionhistory" className="btn__history">
            Transection History
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
