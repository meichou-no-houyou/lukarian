import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import nextPWA from "next-pwa";

const pwa = nextPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development"
});

/** @type {import('next').NextConfig} */
const nextConfig = pwa({
    experimental: {
        mdxRs: true
    }
});

const withMDX = createMDX({
    options: {
        extension: /\.mdx?$/,
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
    }
});

export default withMDX(nextConfig);
