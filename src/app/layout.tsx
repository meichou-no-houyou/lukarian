import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { defaultColor, defaultDescription } from "./lib/utils/meta";

const rubik = Rubik({ subsets: ["latin"], weight: ["300", "400", "500", "700", "800", "900"] });

const icons = [
    {
        url: "/images/icons/icon-512x512.png",
        width: 512,
        height: 512,
    },
    {
        url: "/images/icons/icon-384x384.png",
        width: 384,
        height: 384,
    },
    {
        url: "/images/icons/icon-192x192.png",
        width: 192,
        height: 192,
    },
    {
        url: "/images/icons/icon-152x152.png",
        width: 152,
        height: 152,
    },
    {
        url: "/images/icons/icon-144x144.png",
        width: 144,
        height: 144,
    },
    {
        url: "/images/icons/icon-128x128.png",
        width: 128,
        height: 128,
    },
    {
        url: "/images/icons/icon-96x96.png",
        width: 96,
        height: 96,
    },
    {
        url: "/images/icons/icon-72x72.png",
        width: 72,
        height: 72,
    },
    {
        url: "/images/icons/icon-48x48.png",
        width: 48,
        height: 48,
    },
];

export const metadata: Metadata = {
    metadataBase: new URL("https://lukarian.kuronushi.dev"),
    manifest: "/manifest.json",
    title: {
        template: "LukaRian - %s",
        default: "LukaRian - Home",
    },
    description: defaultDescription,
    colorScheme: "only light",
    themeColor: defaultColor,
    keywords: "lukarian, meichou no houyou, halodoc, health, health info, wikipedia, encyclopedia",
    openGraph: {
        type: "website",
        alternateLocale: "id_ID",
        locale: "en_US",
        countryName: "Indonesia",
        siteName: "lukarian.kuronushi.dev",
        description: defaultDescription,
        title: {
            template: "LukaRian - %s",
            default: "LukaRian - Home",
        },
        images: icons,
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link type="application/json+oembed" href="https://lukarian.kuronushi.dev/oembed.json"></link>
            </head>
            <body className={rubik.className}>{children}</body>
        </html>
    );
}
