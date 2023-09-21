import React from "react";
import Navbar from "../lib/components/navbar";
import Footer from "../lib/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col justify-between min-h-screen">
            <Navbar />
            <div className="h-[4.5rem] md:h-[5rem]"></div>
            {children}
            <Footer />
        </main>
    );
}
