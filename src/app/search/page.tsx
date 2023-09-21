"use client";

import ArticleCard from "../lib/components/articlecard";
import { useSearchParams } from "next/navigation";
import { articles } from "../lib/articles";

export default function Search() {
    const params = useSearchParams();
    const query = params.get("q") ?? "";
    const matchedArticles = articles.filter((x) => x.title.toLowerCase().includes(query.toLowerCase()));
    return (
        <>
            <div className="flex items-center w-full py-6 px-4 lg:px-0">
                <div className="mx-auto items-center md:items-start w-full max-w-screen-xl flex flex-col gap-y-6">
                    <div className="flex gap-x-2 items-center">
                        <h1 className="text-3xl font-semibold">Hasil Pencarian: {query}</h1>
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
