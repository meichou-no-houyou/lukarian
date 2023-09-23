"use client";

import { articles } from "@/app/lib/articles";
import ArticleCard from "@/app/lib/components/articlecard";
import Navbar from "../lib/components/navbar";
import Image from "next/image";
import { IconEdit } from "@tabler/icons-react";
import Button from "../lib/components/button";

export default function Profile() {
    const navs = ["Your Articles", "Liked", "History"];
    const matchedArticles = articles.map((x) => x);

    return (
        <>
            <Navbar />
            <div className="h-[4.5rem] md:h-[5rem]"></div>
            <div style={{ backgroundImage: `url(/images/dummy/banner.png)` }} className="bg-cover bg-no-repeat bg-center relative w-full h-72 md:h-96">
                <div className="absolute w-full h-full inset-x-0 inset-y-0 bg-gradient-to-t from-black z-0"></div>
                <div className="flex items-center w-full h-full bottom-0">
                    <div className="flex flex-col justify-end max-w-screen-xl w-full h-full mx-auto z-0">
                        <div className="flex md:flex-row gap-x-4 items-center p-4 md:p-0">
                            <div className="w-60 md:w-32 align-middle">
                                <Image src="/images/dummy/avatar.jpg" alt="Avatar" width={150} height={150} className="object-cover rounded-md w-16 h-16 md:w-44 md:h-32 mb-2 md:mb-0" />
                            </div>
                            <div className="text-white">
                                <h1 className="font-bold flex gap-x-2 items-center text-base md:text-xl">
                                    Achmad Tirto Sudiro
                                    <span className="font-normal">
                                        <Button type="info" className="p-1 md:p-2">
                                            <IconEdit className="w-6 h-6 md:w-8 md:h-8" />
                                        </Button>
                                    </span>
                                </h1>
                                <p className="text-sm md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
                                    consectetur, ultrices mauris.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="tabs" className="w-full items-center bg-teagreen px-4 md:px-0">
                <div className="max-w-screen-xl md:overflow-x-hidden gap-x-5 mx-auto w-full py-5 flex">
                    {navs.map((nav, i) => (
                        <Button key={i} type="success" className="whitespace-nowrap">
                            {nav}
                        </Button>
                    ))}
                </div>
            </section>
            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-10 my-5">
                {matchedArticles.map((article, i) => (
                    <ArticleCard created_at={article.created_at} key={i} link={`/articles/${article.id}`} summary={article.summary} title={article.title} user={article.author} />
                ))}
            </div>
        </>
    );
}
