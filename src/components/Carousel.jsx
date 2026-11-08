import { useRef, useState } from "react";
import { photos } from "../media";

const arrow =
  "absolute top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl font-black text-brand-dark shadow hover:bg-white disabled:opacity-30";

const Carousel = () => {
  const track = useRef(null);
  const [index, setIndex] = useState(0);

  if (photos.length === 0) {
    return (
      <div className="grid aspect-4/3 place-items-center rounded-3xl border-2 border-dashed border-brand/40 bg-white p-8 text-center">
        <p className="font-bold text-brand-dark">
          Project photos will appear here.
        </p>
      </div>
    );
  }

  const go = (i) => {
    const el = track.current;
    const last = photos.length - 1;
    // Loop: past the last photo goes to the first, before the first goes to the last
    const target = i < 0 ? last : i > last ? 0 : i;
    // When wrapping around, jump instead of scrolling across every photo
    const jump = Math.abs(target - index) > 1;
    el.scrollTo({
      left: target * el.clientWidth,
      behavior: jump ? "auto" : "smooth",
    });
  };

  const onScroll = (e) => {
    const el = e.currentTarget;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Project photos"
    >
      <div className="relative overflow-hidden rounded-3xl bg-ink">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => go(index - 1)}
          className={`${arrow} left-3`}
        >
          &lsaquo;
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => go(index + 1)}
          className={`${arrow} right-3`}
        >
          &rsaquo;
        </button>

        <div
          ref={track}
          onScroll={onScroll}
          onKeyDown={onKeyDown}
          tabIndex={0}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className="m-0 w-full shrink-0 snap-center"
              aria-label={`Photo ${i + 1} of ${photos.length}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="aspect-4/3 w-full bg-ink object-contain"
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-4 text-[15px]">
        <p className="min-h-6 text-ink/75">{photos[index]?.caption}</p>
        <p className="shrink-0 font-bold text-brand-dark">
          {index + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
