import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://115d64b120e429ba7f1a297a5b7a97d0@o4509364933099520.ingest.us.sentry.io/4509364939849728",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});