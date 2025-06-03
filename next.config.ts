
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // Example for potential future image sources
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/wn/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.astronomyapi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'widgets.astronomyapi.com', // Added for moon phase images
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      { // Added for Astrocats API if it ever serves images, though primarily data
        protocol: 'https',
        hostname: 'api.astrocats.space',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
    N2YO_API_KEY: process.env.N2YO_API_KEY,
    ASTRONOMY_API_APP_ID: process.env.ASTRONOMY_API_APP_ID,
    ASTRONOMY_API_SECRET: process.env.ASTRONOMY_API_SECRET,
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    TIMEZONEDB_API_KEY: process.env.TIMEZONEDB_API_KEY,
    NEXT_PUBLIC_NASA_API_KEY: process.env.NEXT_PUBLIC_NASA_API_KEY,
    NEXT_PUBLIC_OPENWEATHER_API_KEY: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
    NEXT_PUBLIC_TIMEZONEDB_API_KEY: process.env.NEXT_PUBLIC_TIMEZONEDB_API_KEY,
  }
};

export default nextConfig;

