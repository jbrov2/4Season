import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="bg-tint pt-40 pb-28">
    <div className="mx-auto max-w-3xl px-6">
      <p className="mb-3 text-xs font-bold tracking-[.14em] text-brand uppercase">
        404
      </p>
      <h1 className="mb-5 text-4xl font-black text-brand-dark md:text-5xl">
        That page has not sprouted yet
      </h1>
      <p className="mb-8 text-lg text-ink/75">
        We could not find what you were looking for.
      </p>
      <Link
        to="/"
        className="inline-block rounded-full border-2 border-brand bg-brand px-6 py-3 text-[15px] font-bold text-white hover:border-brand-dark hover:bg-brand-dark"
      >
        Back to home
      </Link>
    </div>
  </section>
);

export default NotFound;
