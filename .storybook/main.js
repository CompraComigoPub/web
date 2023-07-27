const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
const path = require("path");

module.exports = {
  stories: [
    "../src/stories/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/atoms/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../src/components/molecules/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../src/components/organisms/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../src/components/pages/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../src/utils/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../src/styleguide/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "storybook-addon-jsx",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-designs",
  ],
  webpackFinal: (config, { configType }) => {
    const newConfig = { ...config };
    newConfig.resolve.alias["~"] = path.resolve(__dirname, "../src/");
    newConfig.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    newConfig.devtool = "inline-source-map";

    newConfig.module.rules.push({
      test: /\.module\.(s*)css$/,
      include: path.resolve(__dirname, "../src/"),
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        "sass-loader",
      ],
    });

    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [require.resolve("babel-preset-react-app")],
      },
    });

    newConfig.resolve.extensions.push(".ts", ".tsx");

    newConfig.resolve.alias = {
      ...(newConfig.resolve.alias || {}),
      styles: path.resolve(__dirname, "../src/utils/styles"),
      "~": path.join(__dirname, "../src/"),
    };

    return { ...newConfig };
  },
};
