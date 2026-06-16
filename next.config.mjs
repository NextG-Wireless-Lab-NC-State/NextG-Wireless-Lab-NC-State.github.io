// Org-root GitHub Pages site (nextg-wireless-lab-nc-state.github.io) serves at
// the domain root, so the default base path is empty. Override with
// NEXT_PUBLIC_BASE_PATH to deploy under a sub-path if ever needed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
