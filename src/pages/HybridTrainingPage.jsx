import { Link } from "react-router-dom";
import { ZOOM_URL } from "../config";

const HybridTrainingPage = () => (
  <section className="bg-tint pt-40 pb-24">
    <div className="mx-auto max-w-3xl px-6">
      <p className="mb-3 text-xs font-bold tracking-[.14em] text-brand uppercase">
        Hybrid Training
      </p>
      <h1 className="mb-5 text-3xl leading-tight font-black text-brand-dark md:text-5xl">
        Learn in person or online
      </h1>
      <p className="mb-8 text-lg text-ink/75">
        Access information about upcoming workshops, virtual learning sessions,
        and hands-on training opportunities.
      </p>

      <div className="rounded-3xl border border-brand-dark/15 bg-white p-8">
        {ZOOM_URL ? (
          <>
            <h2 className="mb-2 text-xl font-black">Join a session</h2>
            <p className="mb-6 text-ink/70">
              Use the link below to join or register for virtual training.
            </p>
            <a
              href={ZOOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-brand bg-brand px-6 py-3 text-[15px] font-bold text-white hover:border-brand-dark hover:bg-brand-dark "
            >
              Zoom access / registration
            </a>
          </>
        ) : (
          <>
            <span className="mb-4 inline-block rounded-full border border-brand-dark/15 bg-tint px-3.5 py-1.5 text-xs font-bold tracking-[.12em] text-brand uppercase">
              Link coming soon
            </span>
            <h2 className="mb-2 text-xl font-black">Zoom access</h2>
            <p className="mb-6 text-ink/70">
              The Zoom access or registration link will be posted here when it
              is available. Register your interest to be notified.
            </p>
            <Link
              to="/intake"
              className="inline-block rounded-full border-2 border-brand px-6 py-3 text-[15px] font-bold text-brand hover:bg-brand hover:text-white hover:shadow-md transition ease-in-out duration-300"
            >
              Register for an upcoming cohort
            </Link>
          </>
        )}
      </div>
    </div>
  </section>
);

export default HybridTrainingPage;
