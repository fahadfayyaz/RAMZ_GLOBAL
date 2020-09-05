const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
// const { nextI18NextRewrites } = require("next-i18next/rewrites");
const localeSubpaths = {
  en: "en",
  de: "de",
};

module.exports = {
  ...withFonts(
    withOptimizedImages({
      /* config for next-optimized-images */
      // your config for other plugins or the general next.js here...
    })
  ),
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

const nextI18NextRewrites = (localeSubpaths) => {
  return Object.values(localeSubpaths || {}).reduce(
    (prev, value) =>
      prev.concat([
        { source: `/:lang(${value}){/}?`, destination: "/" },
        { source: `/:lang(${value})/:path*`, destination: "/:path*" },
      ]),
    []
  );
};
