import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-t0",
  project: "javascript-react",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};


export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
  ssr: {
    noExternal: [/@syncfusion/]
  }
  };
});
