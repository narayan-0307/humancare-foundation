import React from "react";
import "./SecondOpenion.css";
import "./AboutUs.css";
import AboutBanner from "../assets/about-us-banner.png";

export default function SecondOpenion() {
  return (
    <>
      <div className="second-opinion-container">
        {/* Hero Section */}
        {/* <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">About Humancare Foundation Trust</h1>
              <p className="hero-description">
                We are a community-driven foundation committed to expanding
                access to healthcare, education, and essential skill
                development, creating opportunities that uplift individuals and
                families facing challenges.
              </p>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="hands-heart">
                  <img
                    src="https://helios-i.mashable.com/imagery/articles/05v0DeEjckJarRiep11Xujy/hero-image.fill.size_1200x1200.v1614275176.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="about-hero">
          <div className="container about-hero-grid">
            {/* LEFT CONTENT */}
            <div className="about-hero-content">
              <h1>About Humancare Foundation Trust</h1>
              <p>
                We are a community-driven foundation committed to expanding
                access to healthcare, education, and essential skill
                development, creating opportunities that uplift individuals and
                families facing challenges.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="about-hero-image">
              <img src={AboutBanner} alt="About Humancare Foundation Trust" />
            </div>
          </div>
        </section>

        {/* Section 1: Why Consider a Second Opinion */}
        <section className="why-section">
          <div className="why-container">
            <div className="why-image">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500"
                alt="Medical team"
              />
            </div>
            <div className="why-content">
              <h2 className="why-title">
                Why Consider a Second Opinion at Humancare World?
              </h2>
              <p className="why-text">
                Apollo Hospitals stands as a beacon of healthcare expertise,
                backed by a legacy of pioneering achievements since 1983. Our
                commitment to clinical excellence and innovative practices has
                positioned us as Asia's leading integrated healthcare services
                provider. With a team of renowned specialists and access to
                cutting-edge medical technologies, we offer unparalleled
                expertise in diagnosing as well as treating a wide array of
                simple to most complex medical conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Benefits of Seeking a Second Opinion */}
        <section className="benefits-section">
          <h2 className="benefits-title">
            Benefits of Seeking a Second Opinion
          </h2>
          <p className="benefits-subtitle">
            With Apollo Hospitals, a second opinion isn't just an alternative
            perspective; it's a pathway topersonalized, high-quality care that
            can make a significant difference in your health outcomes.
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-image">
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=500"
                  alt="Medical consultation"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-number">1.Unmatched Expertise</h3>
                <p className="benefit-text">
                  Our team of renowned specialists across diverse medical
                  disciplines brings unparalleled experience and knowledge to
                  your case.
                </p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-image">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=500"
                  alt="Medical equipment"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-number">
                  2.Advanced Medical Capabilities
                </h3>
                <p className="benefit-text">
                  We leverage cutting-edge technology and diagnostic tools for
                  precise diagnoses and personalized treatment plans.
                </p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-image">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=500"
                  alt="Medical equipment"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-number">
                  2.Advanced Medical Capabilities
                </h3>
                <p className="benefit-text">
                  We leverage cutting-edge technology and diagnostic tools for
                  precise diagnoses and personalized treatment plans.
                </p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-image">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=500"
                  alt="Medical equipment"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-number">
                  2.Advanced Medical Capabilities
                </h3>
                <p className="benefit-text">
                  We leverage cutting-edge technology and diagnostic tools for
                  precise diagnoses and personalized treatment plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: When to Seek a Second Opinion */}
        <section className="when-section">
          <h2 className="when-title">When to Seek a Second Opinion</h2>
          <p className="when-subtitle">
            Choosing when to seek a second opinion is a critical decision in
            your healthcare journey. At Apollo Hospitals,we recommend
            considering a second opinion in scenarios including:
          </p>
          <div className="when-grid">
            <div className="when-card when-card-beige">
              <div className="when-icon when-icon-orange">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 44c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" />
                  <path d="M32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm4 20h-8v-8h8v8z" />
                </svg>
              </div>
              <h3 className="when-card-title">
                Complex or Uncertain Diagnosis
              </h3>
              <p className="when-card-text">
                If you or your loved ones have a confusing diagnosis or remain
                unsure about the best course of action, a second opinion can
                provide clarity. In addition, conditions with significant
                implications or life-altering consequences also require a second
                opinion from experts.
              </p>
            </div>
            <div className="when-card when-card-blue">
              <div className="when-icon when-icon-green">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M48 20H16c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V24c0-2.2-1.8-4-4-4zm0 28H16V24h32v24z" />
                  <rect x="20" y="28" width="24" height="4" />
                  <rect x="20" y="36" width="16" height="4" />
                </svg>
              </div>
              <h3 className="when-card-title">Rare or Uncommon Condition</h3>
              <p className="when-card-text">
                When dealing with less frequent conditions, a second opinion
                from a specialist with specific expertise can be invaluable.
              </p>
            </div>
            <div className="when-card when-card-light">
              <div className="when-icon when-icon-blue">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M52 12H12c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4zm0 36H12V16h40v32z" />
                  <path d="M20 24h24v4H20zm0 8h24v4H20zm0 8h16v4H20z" />
                </svg>
              </div>
              <h3 className="when-card-title">Major Surgical Procedures</h3>
              <p className="when-card-text">
                Before undergoing major surgeries that carry significant risks
                or have long-term implications, a second opinion can offer
                valuable insight and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Two new sections: Why Choose (image left, list right) and Consultation (text left, image right) */}
        <section className="choose-section">
          <div className="choose-inner">
            <div className="choose-image">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
                alt="Doctor"
              />
            </div>
            <div className="choose-content">
              <h2 className="choose-title">
                Why Choose Humancare For Your Second Opinion
              </h2>
              <div className="choose-features">
                <div className="choose-item">
                  <h3>1. Multidisciplinary Team Approach</h3>
                  <p>
                    Our specialists collaborate to provide a holistic
                    perspective on your case.
                  </p>
                </div>

                <div className="choose-item">
                  <h3>Access to the Latest Advancements</h3>
                  <p>
                    We remain at the forefront of medical innovation, ensuring
                    you have access to the latest treatment options.
                  </p>
                </div>

                <div className="choose-item">
                  <h3>Global Strategic Partnerships</h3>
                  <p>
                    Our partnerships with international institutions elevate our
                    second-opinion services with a global perspective.
                  </p>
                </div>

                <div className="choose-item">
                  <h3>Proven Track Record of Excellence</h3>
                  <p>
                    Our reputation for high-quality healthcare gives you the
                    confidence to trust our expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="consult-section">
          <div className="consult-inner">
            <div className="consult-content">
              <h2 className="consult-title">
                Consultation With A Humancare Specialist
              </h2>
              <p className="consult-intro">
                <strong>During your consultation, our specialist will:</strong>
              </p>
              <ol className="consult-steps">
                <li>
                  Review your medical history and existing reports in detail.
                </li>
                <li>
                  Ask you questions to understand your concerns and goals.
                </li>
                <li>
                  Provide a comprehensive second opinion and discuss all
                  treatment options.
                </li>
                <li>
                  Address your questions and offer personalized recommendations
                  to empower your healthcare journey.
                </li>
              </ol>
            </div>
            <div className="consult-image">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800"
                alt="Specialist team"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
