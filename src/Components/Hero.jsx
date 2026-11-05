export default function Hero() {
  return (
    <section className="hero-section py-4" aria-labelledby="hero-title">
      {/* Changed from container-fluid to container to match other components */}
      <div className="container">
        <div className="position-relative">
          <img
            className="hero-image img-fluid w-100 rounded-4 object-fit-cover"
            src="https://images.frame.work/frameworkmarketplace/aJBl86Tt2nPbZzs1_homepage_fw13-banner_desktop.jpg?auto=format%2Ccompress"
            alt="Framework 13 Pro laptop"
            // Added a minimum height so the text doesn't overflow on small screens
            style={{ minHeight: "400px" }}
          />

          <div className="position-absolute top-50 start-0 translate-middle-y col-10 col-md-6 col-lg-5 ps-4 ps-md-5">
            <div className="text-white">
              <h1 id="hero-title" className="fs-2 fw-bold lh-sm text-shadow">
                Framework Laptop 13 isn’t our computer. It’s yours.
              </h1>
              <p className="text-shadow">
                Updated for 2025 with AMD's latest Ryzen™ AI 300 Series
                Processors with up to 12 CPU cores.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn text-white fw-medium"
                  style={{ backgroundColor: "#e76235" }}
                >
                  Configure now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light fw-medium"
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
