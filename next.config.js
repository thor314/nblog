// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
// https://nextjs.org/docs/advanced-features/using-mdx#helpful-links

// Next.js will handle .md and .mdx files in pages directory
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  // optionally provide remark and rehype plugins
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

// configure to support top-level .mdx pages
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Render these pages:
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // pageExtensions: [ "mdx"],
  // experimental: {
  //   appDir: true,
  // },
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)