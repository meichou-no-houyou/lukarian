"use client";

import { articles } from "@/app/lib/articles";
import ArticleCard from "@/app/lib/components/articlecard";
import { IconChevronsRight } from "@tabler/icons-react";
import Link from "next/link";

export default function SearchCategory({ params }: { params: { category: string } }) {
    const matchedArticles = articles.filter((x) => x.category === decodeURIComponent(params.category));
    return (
        <>
            <div className="flex items-center w-full py-6 px-4 md:px-0">
                <div className="mx-auto items-center md:items-start w-full max-w-screen-xl flex flex-col gap-y-6">
                    <div className="flex gap-x-2 items-center">
                        <Link href="/" className="text-3xl font-semibold">
                            Kategori
                        </Link>
                        <IconChevronsRight />
                        <h1 className="text-3xl font-semibold">{decodeURIComponent(params.category)}</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {matchedArticles.map((article, i) => (
                            <ArticleCard created_at={article.created_at} key={i} link={`/articles/${article.id}`} summary={article.summary} title={article.title} user={article.author} />
                        ))}
                        {matchedArticles.length === 0 && <h1>Tidak ada hasil.</h1>}
                    </div>
                </div>
            </div>
        </>
    );
}
