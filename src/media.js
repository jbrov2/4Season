// Photos are picked up automatically from src/assets/progress/ in filename order.
// To add a caption, add a line below using the exact file name.
export const captions = {
  // "progress-01.webp": "Raised beds going in at the Springfield site",
};

const modules = import.meta.glob("./assets/progress/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src], i) => {
    const file = path.split("/").pop();
    const caption = captions[file] || "";
    return { src, caption, alt: caption || `Project progress photo ${i + 1}` };
  });
