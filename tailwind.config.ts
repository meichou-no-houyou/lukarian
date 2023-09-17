import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                night: "#0F1707",
                honeydew: "#E8F4DC",
                pistachio: "#99CD65",
                teagreen: "#CFE7B6",
                asparagus: "#699E33",
                success: "#8ACC47",
                info: "#C3E9D7",
                warning: "#DCE79A",
                danger: "#E78476",
            },
        },
    },
    plugins: [],
};
export default config;
