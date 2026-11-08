import Hero from "../components/Hero";
import {
  About,
  Services,
  Who,
  GetInvolved,
  Progress,
  ComingSoon,
} from "../components/Sections";

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Who />
    <GetInvolved />
    <Progress />
    <ComingSoon />
  </>
);

export default Home;
