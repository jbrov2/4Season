import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const delay = (ms) => ({ animationDelay: `${ms}ms` });

const Hero = () => {
  return (
    <header id="home" className="bg-linear-to-b from-tint to-cream pt-36 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p
            className="fade-up mb-3 text-xs font-bold uppercase tracking-[.14em] text-brand"
            style={delay(0)}
          >
            Micro-Farm Business Incubator
          </p>
          <h1
            className="fade-up text-4xl leading-tight font-black text-brand-dark md:text-6xl"
            style={delay(120)}
          >
            Cultivating sustainable agriculture and{" "}
            <span className="text-brand">community resilience</span>
          </h1>
          <p
            className="fade-up mt-5 mb-2 text-xl font-medium"
            style={delay(260)}
          >
            Springfield, Massachusetts
          </p>
          <p
            className="fade-up mb-8 text-sm font-bold uppercase tracking-wide text-brand"
            style={delay(360)}
          >
            Picked today. Available today. Fresh starts here.
          </p>
          <div className="fade-up flex flex-wrap gap-3" style={delay(480)}>
            <Link
              to="/intake"
              className="rounded-full border-2 border-brand bg-brand px-6 py-3 text-[15px] font-bold text-white hover:border-brand-dark hover:bg-brand-dark hover:shadow-md transition duration-350"
            >
              Register for an upcoming cohort
            </Link>
            <a
              href="#about"
              className="rounded-full border-2 border-brand px-6 py-3 text-[15px] font-bold text-brand hover:bg-brand hover:text-white hover:shadow-md transition duration-350"
            >
              Learn more
            </a>
          </div>
        </div>

        <div
          className="fade-up order-first max-w-md rounded-3xl border border-brand-dark/15 bg-white p-5 md:order-0"
          style={delay(200)}
        >
          <img
            src={logo}
            alt="4 Seasons Harvest logo: a barn behind a chain-link 4 and wooden sign"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
