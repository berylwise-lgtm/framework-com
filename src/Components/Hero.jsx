
export default function Hero() {
  return (
    <section
      className="hero-section bg-light p-3 d-flex"
      aria-labelledby="hero-title"
    >
      <div className="container-fluid">
        <div className="position-relative">
          <img
            className="hero-image img-fluid w-100 rounded-4"
            style={{ height: "clamp(420px, 42vw, 600px)", objectFit: "cover" }}
            src="https://images.frame.work/frameworkmarketplace/aJBl86Tt2nPbZzs1_homepage_fw13-banner_desktop.jpg?auto=format%2Ccompress"
            alt="Framework 13 Pro laptop"
          />
            
          
          <div
            className="position-absolute top-50 start-0 translate-middle-y"
            style={{
              width: "min(28rem, calc(100% - 2rem))",
              marginLeft: "1rem",
              zIndex: 1,
            }}
          >
            <div
              className="hero-content card bg-transparent border-0 shadow-none p-3 p-md-4"
              style={{ color: "white" }}
            >
              <h1 id="hero-title" className="display-4 lh-1 fw-bold">
                The ultimate{" "}
                <span style={{ color: "#e76235" }} className="fw-bold rounded">
                  developer laptop
                </span>
              </h1>
              <p className="card-text">
                Framework Laptop 13 Pro delivers 20 hours of battery life ϟ,
                Intel Core Ultra Series 3 processors, LPCAMM2 memory, and a
                haptic touchpad in a refined CNC aluminum chassis. Still
                repairable, upgradeable, and customizable, with excellent Linux
                support. Now with nothing holding you back.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  style={{ backgroundColor: "#e76235" }}
                  className="btn"
                >
                  Configure now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ color: "white" }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}