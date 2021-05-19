const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/" className="logo__link">
          <h1>MG Banking</h1>
        </a>
      </div>
      <div className="menu">
        <a className="menu__link" href="/">
          Home
        </a>
        <a className="menu__link" href="/viewusers">
          Send Money
        </a>
        <a className="menu__link" href="/transectionhistory">
          Tansection History
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
