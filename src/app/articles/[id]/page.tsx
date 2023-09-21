"use client";
import { articles } from "@/app/lib/articles";
import Navbar from "@/app/lib/components/navbar";
import { IconArrowLeft, IconClock } from "@tabler/icons-react";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import Footer from "@/app/lib/components/footer";
import { useRouter } from "next/navigation";
import Button from "@/app/lib/components/button";

export default function ArticleView({ params }: { params: { id: string } }) {
    const router = useRouter();
    const article = articles.find((article) => article.id === Number(params.id));
    if (!article) {
        return router.replace("/articles/x/not-found");
    }
    const { content, ...meta } = article;

    return (
        <>
            <Navbar />
            <section id="article" className="w-full items-center py-16 px-4 md:px-0">
                <div className="max-w-screen-md mx-auto w-full py-16 flex flex-col items-start gap-y-4">
                    <Button onClick={() => router.back()} type="transparent" className="flex items-center p-0 md:p-0 gap-x-4">
                        <IconArrowLeft /> Kembali
                    </Button>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-3xl">{meta.title}</h1>
                        <div>
                            <h2 className="font-normal text-sm text-start text-slate-600">Di posting pada {meta.created_at}</h2>
                            <h2 className="font-normal text-sm text-start text-slate-600">Oleh {meta.author.name}</h2>
                        </div>
                    </div>
                    <div className="prose w-full">
                        <MDXProvider>{content}</MDXProvider>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
