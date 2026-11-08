import { INTAKE_FORM_URL } from "../config";

const steps = [
  {
    title: "Open the form",
    text: "Use the registration form link. It opens in a new tab.",
  },
  {
    title: "Share your preferences",
    text: "Tell us your interests, the times that work for you, and whether you prefer in-person, virtual, or hybrid.",
  },
  {
    title: "We follow up",
    text: "We will contact you with cohort details as they are confirmed.",
  },
];

const asks = [
  "Name, email, and optional phone",
  "Area of residence",
  "Participant or vendor",
  "Interest area",
  "Individual or group size",
  "Preferred times: evening, weekend, morning, afternoon",
  "Preferred format: in-person, virtual, or hybrid",
  "Consent to be contacted",
];

const FormButton = ({ light }) =>
  INTAKE_FORM_URL ? (
    <a
      href={INTAKE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 px-8 py-4 text-base font-bold ${
        light
          ? "border-tan bg-tan text-ink hover:bg-white hover:border-white hover:shadow-md transition ease-in-out duration-300"
          : "border-brand bg-brand text-white hover:border-brand-dark hover:bg-brand-dark hover:shadow-md transition ease-in-out duration-300"
      }`}
    >
      Open the registration form
    </a>
  ) : (
    <span className="inline-block rounded-full border-2 border-dashed border-current px-8 py-4 text-base font-bold opacity-70">
      Form link coming soon
    </span>
  );

const Intake = () => (
  <>
    {/* Dark header band, different from the light home hero */}
    <header className="bg-brand-dark pt-36 pb-20 text-cream">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-3 text-xs font-bold tracking-[.14em] text-tan uppercase">
          Intake
        </p>
        <h1 className="mb-5 text-4xl leading-tight font-black md:text-5xl">
          Register for an upcoming cohort
        </h1>
        <p className="mb-8 text-lg text-cream/85">
          Participants and vendors are both welcome. Complete the registration
          form to tell us about your interest and availability.
        </p>
        <FormButton light />
      </div>
    </header>

    {/* Numbered steps */}
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-10 text-2xl font-black text-brand-dark md:text-3xl">
          How registration works
        </h2>
        <ol className="space-y-8 border-l-4 border-brand/30 pl-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-14 grid size-10 place-items-center rounded-full bg-brand font-black text-white">
                {i + 1}
              </span>
              <h3 className="mb-1 text-lg font-black">{s.title}</h3>
              <p className="text-ink/70">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 rounded-2xl bg-tint p-5 text-ink/80">
          Cohort dates have not been confirmed yet. Share your preferences and
          we will follow up as soon as schedules are set.
        </p>
      </div>
    </section>

    {/* What the form asks */}
    <section className="bg-tint py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-2xl font-black text-brand-dark md:text-3xl">
          What the form asks
        </h2>
        <ul className="mb-10 grid gap-3 sm:grid-cols-2">
          {asks.map((a) => (
            <li
              key={a}
              className="rounded-xl border border-brand-dark/15 bg-white px-4 py-3 text-[15px]"
            >
              {a}
            </li>
          ))}
        </ul>
        <FormButton />
      </div>
    </section>
  </>
);

export default Intake;
