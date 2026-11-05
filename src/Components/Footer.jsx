function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-light pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Desktop
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Parts
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Community</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Subscribe</h6>
            <div className="d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-success">Join</button>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 text-secondary">
            © {year} Framework Clone
          </p>

          <div className="d-flex gap-3">
            <a href="#" className="text-secondary text-decoration-none">
              Privacy
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Terms
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Warranty
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
