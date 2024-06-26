export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are World Best IT company</p>
              <h1>Welcome to Thapa Technical</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam similique labore sit, est ut veritatis, aliquid atque
                rerum praesentium animi dolore? Hic eum ut dolorum saepe,
                perspiciatis ratione vitae quidem, tenetur neque earum adipisci
                sapiente explicabo. Eveniet alias cumque nulla.
              </p>
              <div className="btn btn-group">
               <a href="/contact">
                <button className="btn">connect now</button>
               </a>

               <a href="/services">
                <button className="btn secondary-btn">learn More</button>
               </a>
              </div>
            </div>

            {/* /* hero image */} 
            <div className="hero-image">
              <img src="/images/home.png" alt="coding together" width="400" height="500" />

            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>

          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy CLients</p>
          </div>

          <div className="div1">
            <h2>500+</h2>
            <p>Well Known Devlopers</p>
          </div>

          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>

        </div>
      </section>

      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};