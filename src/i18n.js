const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new NextI18Next({
  otherLanguages: ["de"],
  localeSubpaths,
  fallbackLng: "en",
  localePath: path.resolve("./public/locales"),
});
