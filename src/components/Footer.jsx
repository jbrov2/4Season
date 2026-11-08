import sareLogo from "../assets/sare-logo.png";
import pearlLogo from "../assets/pearl-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-14 text-cream/90">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 font-bold text-white">
              An initiative of Pearl Development Group, Inc.
            </p>
            <p>Supported by Northeast SARE &middot; Project CNE25-004</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-2xl bg-white px-5 py-4">
              <img
                src={pearlLogo}
                alt="Pearl Development Group Inc logo"
                className="block h-20 w-auto"
              />
            </div>
            <img
              src={sareLogo}
              alt="Northeast SARE: Sustainable Agriculture Research and Education"
              className="block h-24 w-auto"
            />
          </div>
        </div>

        <div className="mt-8 space-y-3 border-t border-tan/25 pt-5 text-sm leading-relaxed text-cream/80">
          <p>
            This material is based upon work supported by the National Institute
            of Food and Agriculture, U.S. Department of Agriculture, through the
            Northeast Sustainable Agriculture Research and Education program
            under subaward number CNE25-004.
          </p>
          <p>
            Any opinions, findings, conclusions, or recommendations expressed in
            this publication are those of the author(s) and do not necessarily
            reflect the view of the U.S. Department of Agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
