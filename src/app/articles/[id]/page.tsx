"use client";
import { articles } from "@/app/lib/articles";
import Navbar from "@/app/lib/components/navbar";
import { IconArrowLeft, IconCircleCheckFilled, IconClock, IconDiscountCheckFilled, IconEyeFilled, IconHeartFilled } from "@tabler/icons-react";
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
                    <div className="w-full rounded-lg p-4 flex justify-between bg-honeydew">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="font-bold text-2xl">Statistik Artikel Ini</h1>
                            <div className="flex gap-x-4 items-center justify-center flex-col md:flex-row">
                                <div className="w-20 h-20 rounded-full overflow-hidden">
                                    <Image width={75} height={75} src={meta.author.avatar} alt="User Avatar" className="rounded-full" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-lg">{meta.author.name}</h1>
                                    <h2 className="font-semibold text-sm">
                                        {meta.is_verified
                                            ? "Artikel ini sudah terverifikasi oleh ahli dan dapat dijamin validitasnya."
                                            : "Artikel ini belum terverifikasi oleh ahli. Validitas fakta tidak dapat dijamin. Mohon selalu melihat trust score dibawah."}
                                    </h2>
                                    <h3 className="font-normal text-sm gap-x-1 text-slate-600">Dipost pada {meta.created_at}</h3>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <div className="group flex relative">
                                    <span className="font-bold text-lg flex items-center gap-x-2">
                                        <span className="text-red-500">
                                            <IconHeartFilled />
                                        </span>{" "}
                                        {meta.like}
                                    </span>
                                    <span
                                        className="group-hover:opacity-100 transition-opacity bg-pistachio px-2 py-2 text-sm font-bold rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 mx-auto mb-2"
                                    >
                                        Likes
                                    </span>
                                </div>
                                <div className="group flex relative">
                                    <span className="font-bold text-lg flex items-center gap-x-2">
                                        <span className="text-pistachio">
                                            <IconCircleCheckFilled />
                                        </span>{" "}
                                        {meta.trust_score}
                                    </span>
                                    <span
                                        className="group-hover:opacity-100 transition-opacity bg-pistachio px-2 py-2 text-sm font-bold rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 mx-auto mb-2 whitespace-nowrap"
                                    >
                                        Trust Score
                                    </span>
                                </div>
                                <div className="group flex relative">
                                    <span className="font-bold text-lg flex items-center gap-x-2">
                                        <span>
                                            <IconEyeFilled />
                                        </span>{" "}
                                        {meta.trust_score}
                                    </span>
                                    <span
                                        className="group-hover:opacity-100 transition-opacity bg-pistachio px-2 py-2 text-sm font-bold rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 mx-auto mb-2"
                                    >
                                        Views
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {meta.is_verified && meta.verified_by && (
                        <div className="w-full rounded-lg p-4 flex justify-between bg-honeydew">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-bold text-2xl">Artikel Ini Diverifikasi Oleh</h1>
                                <div className="flex gap-x-4 items-center justify-center flex-col md:flex-row">
                                    <div className="w-20 h-20 rounded-full overflow-hidden">
                                        <Image width={75} height={75} src={meta.verified_by.avatar} alt="User Avatar" className="rounded-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="font-bold text-lg">{meta.verified_by.name}</h1>
                                        <h2 className="font-normal text-sm gap-x-1 flex text-slate-600">
                                            <span className="text-pistachio">
                                                <IconDiscountCheckFilled />
                                            </span>{" "}
                                            Terverifikasi pada {meta.verified_by.verified_at}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
