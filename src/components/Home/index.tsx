import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Home() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;

    const letters = h1Ref.current.querySelectorAll(".gsap_split_letter");

    // Set initial state
    gsap.set(letters, {
      opacity: 0,
      x: 100,
    });

    // Animate letters in
    gsap.to(letters, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.04,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="home" className="section">
      <div className="w-layout-blockcontainer container-main w-container">
        <h1
          ref={h1Ref}
          data-w-id="6d188073-2487-31fa-c36a-0d1621970df1"
          className="hero-heading-h1"
          aria-label="Building bold brands with thoughtful design"
        >
          <div
            className="gsap_split_word gsap_split_word1"
            aria-hidden="true"
            style={{
              position: "relative",
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >
            <div
              className="gsap_split_letter gsap_split_letter1"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              B
            </div>
            <div
              className="gsap_split_letter gsap_split_letter2"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              u
            </div>
            <div
              className="gsap_split_letter gsap_split_letter3"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              i
            </div>
            <div
              className="gsap_split_letter gsap_split_letter4"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              l
            </div>
            <div
              className="gsap_split_letter gsap_split_letter5"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              d
            </div>
            <div
              className="gsap_split_letter gsap_split_letter6"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              i
            </div>
            <div
              className="gsap_split_letter gsap_split_letter7"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              n
            </div>
            <div
              className="gsap_split_letter gsap_split_letter8"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              g
            </div>
          </div>
          <div
            className="gsap_split_word gsap_split_word2"
            aria-hidden="true"
            style={{
              position: "relative",
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >
            <div
              className="gsap_split_letter gsap_split_letter9"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              b
            </div>
            <div
              className="gsap_split_letter gsap_split_letter10"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              o
            </div>
            <div
              className="gsap_split_letter gsap_split_letter11"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              l
            </div>
            <div
              className="gsap_split_letter gsap_split_letter12"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              d
            </div>
          </div>
          <div
            className="gsap_split_word gsap_split_word3"
            aria-hidden="true"
            style={{
              position: "relative",
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >
            <div
              className="gsap_split_letter gsap_split_letter13"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              b
            </div>
            <div
              className="gsap_split_letter gsap_split_letter14"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              r
            </div>
            <div
              className="gsap_split_letter gsap_split_letter15"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              a
            </div>
            <div
              className="gsap_split_letter gsap_split_letter16"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              n
            </div>
            <div
              className="gsap_split_letter gsap_split_letter17"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              d
            </div>
            <div
              className="gsap_split_letter gsap_split_letter18"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              s
            </div>
          </div>
          <div
            className="gsap_split_word gsap_split_word4"
            aria-hidden="true"
            style={{
              position: "relative",
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >
            <div
              className="gsap_split_letter gsap_split_letter19"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              w
            </div>
            <div
              className="gsap_split_letter gsap_split_letter20"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              i
            </div>
            <div
              className="gsap_split_letter gsap_split_letter21"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              t
            </div>
            <div
              className="gsap_split_letter gsap_split_letter22"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              h
            </div>
          </div>
          <span
            className="italic-span typing-text"
            style={{ marginLeft: "0.25em" }}
          >
            <div
              className="gsap_split_word gsap_split_word5"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "inline-block",
                marginRight: "0.25em",
              }}
            >
              <div
                className="gsap_split_letter gsap_split_letter23"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                t
              </div>
              <div
                className="gsap_split_letter gsap_split_letter24"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                h
              </div>
              <div
                className="gsap_split_letter gsap_split_letter25"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                o
              </div>
              <div
                className="gsap_split_letter gsap_split_letter26"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                u
              </div>
              <div
                className="gsap_split_letter gsap_split_letter27"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                g
              </div>
              <div
                className="gsap_split_letter gsap_split_letter28"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                h
              </div>
              <div
                className="gsap_split_letter gsap_split_letter29"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                t
              </div>
              <div
                className="gsap_split_letter gsap_split_letter30"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                f
              </div>
              <div
                className="gsap_split_letter gsap_split_letter31"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                u
              </div>
              <div
                className="gsap_split_letter gsap_split_letter32"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                l
              </div>
            </div>
            <div
              className="gsap_split_word gsap_split_word6"
              aria-hidden="true"
              style={{ position: "relative", display: "inline-block" }}
            >
              <div
                className="gsap_split_letter gsap_split_letter33"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                d
              </div>
              <div
                className="gsap_split_letter gsap_split_letter34"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                e
              </div>
              <div
                className="gsap_split_letter gsap_split_letter35"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                s
              </div>
              <div
                className="gsap_split_letter gsap_split_letter36"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                i
              </div>
              <div
                className="gsap_split_letter gsap_split_letter37"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                g
              </div>
              <div
                className="gsap_split_letter gsap_split_letter38"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                n
              </div>
            </div>
          </span>
        </h1>
        <p
          data-w-id="aca08924-3373-f5fc-69ef-f496c3c5cc2e"
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className="para-txt"
        >
          Origami ventures helps business in the hospitality industry stand out,
          guiding them from strategy to success in a competitive market.
        </p>
        <div className="w-layout-grid grid-21">
          <div className="getstarted-btn">
            <a
              data-w-id="eecee728-f47b-6730-11f5-5b63546b3fc7"
              href="/contact"
              className="button w-inline-block"
            >
              <div className="text-block-6">Get Started</div>
              <div className="arrow-div">
                <img
                  src="https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67a9e2599fa438b2b5ca91b6_arrow-top-right.png"
                  loading="lazy"
                  alt="arrow-top"
                  className="arrow-img"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
