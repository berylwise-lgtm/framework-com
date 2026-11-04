export default function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-nowrap" href="#home">
          Framework.
        </a>

        <ul className="navbar-nav ms-auto flex-row gap-3 text-nowrap">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#help">
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#news">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#get-started">
              Get started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
