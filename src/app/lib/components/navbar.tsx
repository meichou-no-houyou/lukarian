"use client";
import { IconSearch } from "@tabler/icons-react";
import Button from "./button";
import { LukarianIcon } from "../svg/LukarianIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const params = useSearchParams();
    const [query, setQuery] = useState(params.get("q") ?? "");
    const router = useRouter();

    useEffect(() => {
        if (!router || !query) return;
        router.replace(`/search?q=${encodeURIComponent(query)}`);
    }, [router, query]);

    return (
        <>
            <div className="w-full fixed top-0 items-center bg-honeydew z-10">
                <nav className="max-w-screen-xl mx-auto w-full py-4 px-5 md:px-0 flex justify-between">
                    <Button asAnchor href="/" type="transparent" className="flex items-center gap-x-3 p-0 md:p-0">
                        <LukarianIcon className="w-9 h-9 md:w-12 md:h-12" width={52} height={52} />
                        <h1 className="text-asparagus font-bold text-sm md:text-md">
                            Luka<span className="!text-pistachio">Rian</span>
                        </h1>
                    </Button>
                    <div className="flex items-center gap-x-3">
                        <form className="items-center hidden md:flex">
                            <input
                                className="focus:outline-none focus:ring-2 focus:ring-opacity-40 focus:ring-success h-8 px-2 rounded-l-md bg-teagreen"
                                type="text"
                                placeholder="Cari artikel"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            ></input>
                            <button className="h-8 px-2 rounded-r-md bg-teagreen text-white font-bold border-l-slate-400 border-l-2">
                                <IconSearch />
                            </button>
                        </form>
                        <Button type="success" className="px-4 py-1 md:py-1 md:px-4">
                            Login
                        </Button>
                    </div>
                </nav>
            </div>
        </>
    );
}
