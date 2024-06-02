module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "transform-inline-environment-variables",
        {
          include: ["API_BASE_URL", "ANNOUNCEMENT_BASE_URL"],
        },
      ],
    ],
  };
};
