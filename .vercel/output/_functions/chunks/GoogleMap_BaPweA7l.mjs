import { jsx } from 'react/jsx-runtime';
import 'react';

function GoogleMap({ embedUrl, className = "" }) {
  if (!embedUrl) {
    return /* @__PURE__ */ jsx("div", { className: `flex h-full w-full items-center justify-center bg-neutral-100 text-neutral-400 rounded-3xl ${className}`, children: /* @__PURE__ */ jsx("p", { children: "Map not available" }) });
  }
  let finalUrl = embedUrl;
  if (embedUrl.trim().startsWith("<iframe")) {
    const match = embedUrl.match(/src="([^"]+)"/);
    if (match && match[1]) {
      finalUrl = match[1];
    }
  }
  return /* @__PURE__ */ jsx("div", { className: `relative h-full w-full overflow-hidden rounded-3xl shadow-soft border border-neutral-100 ${className}`, children: /* @__PURE__ */ jsx(
    "iframe",
    {
      src: finalUrl,
      width: "100%",
      height: "100%",
      style: { border: 0 },
      allowFullScreen: true,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade",
      className: "h-full w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500",
      title: "Location Map"
    }
  ) });
}

export { GoogleMap as default };
