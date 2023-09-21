import Image from "next/image";
import Button from "./button";
import { IconBook } from "@tabler/icons-react";

export default function ArticleCard({ ...articleInfo }: ArticleCardProps) {
    return (
        <div className="bg-honeydew flex flex-col gap-y-4 p-4 justify-between shadow-lg rounded-md">
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-5">
                    <Image width={65} height={65} src={articleInfo.user.avatar} alt="User Avatar" className="rounded-full" />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-lg">{articleInfo.user.name}</h1>
                        <h2 className="font-normal text-sm gap-x-1 text-slate-600">Dipost pada {articleInfo.created_at}</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-xl font-bold">{articleInfo.title}</h1>
                    <p>{articleInfo.summary}</p>
                </div>
            </div>
            <Button asAnchor href={articleInfo.link} type="info" className="flex items-center justify-center text-center gap-x-2">
                <IconBook />
                <p>Baca Ini</p>
            </Button>
        </div>
    );
}

interface ArticleCardProps {
    user: {
        name: string;
        avatar: string;
    };
    title: string;
    summary: string;
    link: string;
    created_at: string;
}
