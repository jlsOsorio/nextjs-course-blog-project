const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  let env;
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    env = {
      mongodb_username: '',
      mongodb_password: '',
      mongodb_clustername: '',
      mongodb_database: '',
    };
  } else {
    env = {
      mongodb_username: '',
      mongodb_password: '',
      mongodb_clustername: '',
      mongodb_database: '',
    };
  }

  return {
    reactStrictMode: true,
    env,
  };
};

module.exports = nextConfig;
