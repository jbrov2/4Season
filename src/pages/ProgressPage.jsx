import { Progress } from "../components/Sections";
import Carousel from "../components/Carousel";
import { PROGRESS_VIDEO_URL } from "../config";

const isFile = (url) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

// Turns a normal YouTube link (video, playlist, youtu.be, shorts) into an embeddable one.
const toEmbed = (url) => {
  try {
    const u = new URL(url);
    const host = u.hostname.replace("www.", "");
    const list = u.searchParams.get("list");
    let id = null;
    if (host === "youtu.be") id = u.pathname.slice(1);
    else if (host.endsWith("youtube.com")) {
      if (u.pathname === "/watch") id = u.searchParams.get("v");
      else if (
        u.pathname.startsWith("/shorts/") ||
        u.pathname.startsWith("/embed/")
      )
        id = u.pathname.split("/")[2];
    }
    if (id && list) return `https://www.youtube.com/embed/${id}?list=${list}`;
    if (id) return `https://www.youtube.com/embed/${id}`;
    if (list) return `https://www.youtube.com/embed/videoseries?list=${list}`;
    return url;
  } catch {
    return url;
  }
};

const ProgressPage = () => (
  <div className="pt-18">
    <Progress />

    <section className="bg-tint py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-6 text-2xl font-black text-brand-dark md:text-3xl">
          Project video
        </h2>
        {PROGRESS_VIDEO_URL ? (
          isFile(PROGRESS_VIDEO_URL) ? (
            <video
              controls
              preload="metadata"
              src={PROGRESS_VIDEO_URL}
              className="aspect-video w-full rounded-3xl bg-ink"
            />
          ) : (
            <iframe
              src={toEmbed(PROGRESS_VIDEO_URL)}
              title="4 Seasons Harvest project progress"
              loading="lazy"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full rounded-3xl bg-ink"
            />
          )
        ) : (
          <div className="grid aspect-video place-items-center rounded-3xl border-2 border-dashed border-brand/40 bg-white p-8 text-center">
            <p className="font-bold text-brand-dark">
              The project progress video will appear here.
            </p>
          </div>
        )}
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-6 text-2xl font-black text-brand-dark md:text-3xl">
          Photo gallery
        </h2>
        <Carousel />
      </div>
    </section>
  </div>
);

export default ProgressPage;
