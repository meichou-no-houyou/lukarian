import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
