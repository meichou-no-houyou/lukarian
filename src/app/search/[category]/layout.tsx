import { Metadata } from "next";

export const metadata: Metadata = {
    title: "LukaRian - Category",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
