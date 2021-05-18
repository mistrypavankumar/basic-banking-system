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
        <a className="menu__link" href="/transectionHistory">
          Tansection History
        </a>
        <a className="menu__link" href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
