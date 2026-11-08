import { Link } from "react-router-dom";

const ComingSoonPage = ({ eyebrow, title, text }) => (
  <section className="bg-ink pt-40 pb-28 text-cream">
    <div className="mx-auto max-w-3xl px-6">
      <span className="mb-5 inline-block rounded-full border border-tan/30 bg-tan/15 px-3.5 py-1.5 text-xs font-bold tracking-[.12em] text-tan uppercase">
        Coming Soon
      </span>
      <p className="mb-3 text-xs font-bold tracking-[.14em] text-tan uppercase">
        {eyebrow}
      </p>
      <h1 className="mb-5 text-4xl leading-tight font-black md:text-5xl">
        {title}
      </h1>
      <p className="mb-8 text-lg text-cream/80">{text}</p>
      <Link
        to="/"
        className="inline-block rounded-full border-2 border-tan px-6 py-3 text-[15px] font-bold text-tan hover:bg-tan hover:text-ink hover:shadow-md transition ease-in-out duration-300"
      >
        Back to home
      </Link>
    </div>
  </section>
);

export default ComingSoonPage;
