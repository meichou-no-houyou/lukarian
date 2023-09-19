"use client";
import { MDXProvider } from "@mdx-js/react";
import { IconClock } from "@tabler/icons-react";
import Navbar from "../../lib/components/navbar";
import ArticleContent from "./article.mdx";
import Image from "next/image";
import Footer from "../../lib/components/footer";

export default function Article() {
    return (
        <>
            <Navbar />
            <section id="article" className="w-full items-center py-12 px-4 md:px-0">
                <div className="max-w-screen-md mx-auto w-full py-12 flex flex-col items-start gap-y-4">
                    <div className="flex flex-col w-full items-center">
                        <Image src="/images/dummy/banner.png" alt="Article" width={350} height={350} className="rounded-md shadow mx-auto mb-4" />
                        <h1 className="font-bold text-3xl">Luka baret pada anak-anak: Panduan Perawatan dan Pencegahan</h1>
                        <h2 className="font-normal text-sm gap-x-1 text-slate-600 flex items-center">
                            <IconClock width={"15px"} /> 31 Februari 2023
                        </h2>
                        <h2 className="font-normal text-md">By: Achmad Tirto Sudiro</h2>
                    </div>
                    <div className="prose w-full">
                        <MDXProvider>
                            <ArticleContent />
                        </MDXProvider>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
