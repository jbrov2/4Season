import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const Wrap = ({ children }) => (
  <Reveal className="mx-auto max-w-6xl px-6">{children}</Reveal>
);

const Eyebrow = ({ children, light }) => (
  <p
    className={`mb-3 text-xs font-bold uppercase tracking-[.14em] ${
      light ? "text-tan" : "text-brand"
    }`}
  >
    {children}
  </p>
);

const H2 = ({ children }) => (
  <h2 className="mb-5 text-3xl leading-tight font-black md:text-5xl">
    {children}
  </h2>
);

const Card = ({ children, dark }) => (
  <div
    className={`rounded-3xl border p-8 ${
      dark
        ? "border-tan/25 bg-brand-dark text-cream"
        : "border-brand-dark/15 bg-white shadow-md"
    }`}
  >
    {children}
  </div>
);

const Btn = ({ href, to, children, outline }) => {
  const cls = `inline-block rounded-full border-2 border-brand px-6 py-3 text-[15px] font-bold ${
    outline
      ? "text-brand hover:bg-brand hover:text-white"
      : "bg-brand text-white hover:border-brand-dark hover:bg-brand-dark"
  }`;
  return to ? (
    <Link to={to} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
};

export const About = () => (
  <section id="about" className="py-22">
    <Wrap>
      <div className="grid gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <Eyebrow>About the Incubator</Eyebrow>
          <H2>Growing food, skills, and opportunity</H2>
        </div>
        <div className="space-y-4 text-ink/75">
          <p>
            The 4 Seasons Harvest Micro-Farm Incubator is an initiative of Pearl
            Development Group, Inc., designed to address food insecurity, expand
            agricultural opportunities, and promote economic empowerment in
            Springfield, Massachusetts.
          </p>
          <p>
            Through hands-on education, peer-to-peer learning, mentorship, and
            sustainable farming practices, the incubator helps participants
            develop the knowledge and practical skills needed to grow fresh
            food, explore agricultural entrepreneurship, and establish
            small-scale farming operations.
          </p>
          <p>
            Our program emphasizes accessible agricultural education, innovative
            growing technologies, and community collaboration to strengthen
            local food systems and create pathways toward greater
            self-sufficiency.
          </p>
        </div>
      </div>
    </Wrap>
  </section>
);

const offers = [
  {
    title: "Hands-On Agricultural Training",
    text: "Explore sustainable growing methods, including hydroponics, aquaponics, mushroom cultivation, composting, and urban farming.",
  },
  {
    title: "Entrepreneurship & Micro-Farm Development",
    text: "Build practical skills in planning, operating, and developing small-scale agricultural ventures.",
  },
  {
    title: "Workshops & Mentorship",
    text: "Connect with experienced growers, agricultural specialists, and community partners through peer-to-peer learning and hybrid training opportunities.",
  },
  {
    title: "Community Food Resilience",
    text: "Learn how locally grown food, innovative farming methods, and collaborative micro-farms can strengthen neighborhood food access.",
  },
];

export const Services = () => (
  <section id="services" className="bg-tint py-22">
    <Wrap>
      <Eyebrow>What We Offer</Eyebrow>
      <H2>Training that takes root</H2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {offers.map((o, i) => (
          <Card key={o.title}>
            <span className="mb-4 grid size-10 place-items-center rounded-full bg-brand font-black text-white">
              {i + 1}
            </span>
            <h3 className="mb-2 text-xl font-black">{o.title}</h3>
            <p className="text-ink/70">{o.text}</p>
          </Card>
        ))}
      </div>
    </Wrap>
  </section>
);

const audience = [
  "Aspiring urban farmers and homesteaders",
  "Individuals interested in agricultural entrepreneurship",
  "Youth and adults seeking practical agricultural skills",
  "Families and groups interested in collaborative micro-farming",
  "Community partners, vendors, and agricultural specialists",
];

export const Who = () => (
  <section id="who" className="py-22">
    <Wrap>
      <div className="grid gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <Eyebrow>Who Can Participate?</Eyebrow>
          <H2>Built for Springfield</H2>
          <p className="text-ink/75">
            The incubator is designed to engage Springfield residents,
            particularly historically underserved communities, including:
          </p>
        </div>
        <ul className="grid gap-3">
          {audience.map((a) => (
            <li
              key={a}
              className="relative rounded-2xl border border-brand-dark/15 bg-white py-4 pr-5 pl-12 before:absolute before:top-1/2 before:left-5 before:size-3.5 before:-translate-y-1/2 before:rounded-full before:bg-brand shadow-md transition "
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </Wrap>
  </section>
);

export const GetInvolved = () => (
  <section id="get-involved" className="bg-tint py-22">
    <Wrap>
      <Eyebrow>Get Involved</Eyebrow>
      <H2>Find your place in the harvest</H2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Card>
          <h3 className="mb-2 text-xl font-black">
            Register for an upcoming cohort
          </h3>
          <p className="mb-6 text-ink/70">
            Tell us about your interest, preferred schedule, and format. We will
            follow up with cohort details as they are confirmed.
          </p>
          <Btn to="/intake">Register now</Btn>
        </Card>
        <Card>
          <h3 className="mb-2 text-xl font-black">Vendors and collaborators</h3>
          <p className="mb-6 text-ink/70">
            Vendors, agricultural professionals, trainers, and community
            organizations are invited to submit their information for potential
            collaboration.
          </p>
          <Btn to="/intake" outline>
            Submit your information
          </Btn>
        </Card>
        <Card>
          <h3 className="mb-2 text-xl font-black">Hybrid Training</h3>
          <p className="mb-6 text-ink/70">
            Access information about upcoming workshops, virtual learning
            sessions, and hands-on training opportunities.
          </p>
          <Btn to="/hybrid-training" outline>
            Training access
          </Btn>
        </Card>
      </div>
    </Wrap>
  </section>
);

export const Progress = () => (
  <section id="progress" className="py-22">
    <Wrap>
      <div className="grid gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <Eyebrow>Project Progress</Eyebrow>
          <H2>Watch it grow</H2>
        </div>
        <p className="text-ink/75">
          Follow the development of our micro-farm facilities, growing systems,
          and community training activities through project updates and videos.
        </p>
      </div>
    </Wrap>
  </section>
);

const Soon = ({ id, title, text }) => (
  <div id={id}>
    <Card dark>
      <span className="mb-4 inline-block rounded-full border border-tan/30 bg-tan/15 px-3.5 py-1.5 text-xs font-bold tracking-[.12em] text-tan uppercase">
        Coming Soon
      </span>
      <h3 className="mb-2 text-xl font-black">{title}</h3>
      <p className="text-cream/80">{text}</p>
    </Card>
  </div>
);

export const ComingSoon = () => (
  <section className="bg-ink py-22">
    <Wrap>
      <div className="grid gap-5 md:grid-cols-2">
        <Soon
          id="media-archive"
          title="Media Archive"
          text="Recorded workshops, educational resources, and project highlights will be added as they become available."
        />
        <Soon
          id="live-feed"
          title="Farm Live Feed"
          text="A future window into our micro-farm operations and growing activities."
        />
      </div>
    </Wrap>
  </section>
);
