/**
 * @type import("next").NextConfig
 */
export default {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    useLightningcss: true,
    // fallbackNodePolyfills: false
  },

  redirects: () => ([
    {
      source: "/art-submission",
      destination: "/art-submissions",
      permanent: false
    }
  ])
};