import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Artikel",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
