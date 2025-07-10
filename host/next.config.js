const { FIRST_APP_URL, SECOND_APP_URL, THIRD_APP_URL, FOURTH_APP_URL } =
  process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/static/_next/:path+",
        destination: `${FIRST_APP_URL}/static/_next/:path+`,
      },
      {
        source: "/second",
        destination: `${SECOND_APP_URL}/second`,
      },
      {
        source: "/second/:path+",
        destination: `${SECOND_APP_URL}/second/:path+`,
      },
      {
        source: "/second-static/_next/:path+",
        destination: `${SECOND_APP_URL}/second-static/_next/:path+`,
      },
      {
        source: "/third",
        destination: `${THIRD_APP_URL}/third`,
      },
      {
        source: "/third/:path+",
        destination: `${THIRD_APP_URL}/third/:path+`,
      },
      {
        source: "/third-static/_next/:path+",
        destination: `${THIRD_APP_URL}/third-static/_next/:path+`,
      },
      {
        source: "/fourth",
        destination: `${FOURTH_APP_URL}/fourth`,
      },
      {
        source: "/fourth/:path+",
        destination: `${FOURTH_APP_URL}/fourth/:path+`,
      },
      {
        source: "/fourth-static/_next/:path+",
        destination: `${FOURTH_APP_URL}/fourth-static/_next/:path+`,
      },
      {
        source: "/:path+",
        destination: `${FIRST_APP_URL}/:path+`,
      },
      {
        source: "/",
        destination: `${FIRST_APP_URL}/`,
      },
    ];
  },
};

module.exports = nextConfig;
