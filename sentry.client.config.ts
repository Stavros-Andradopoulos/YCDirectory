import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://24666302142bcde84fb89613f882e9c6@o4508427168382976.ingest.de.sentry.io/4508427171922000",

    // Add optional integrations for additional features
    integrations: [
        Sentry.replayIntegration(),
        Sentry.feedbackIntegration({
            // Additional SDK configuration goes in here, for example:
            colorScheme: "system",
        }),
    ],

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Define how likely Replay events are sampled.
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
});
