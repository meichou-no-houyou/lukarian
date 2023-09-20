import Image from "next/image";
import Navbar from "../lib/components/navbar";
import { IconChevronsRight, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import Button from "../lib/components/button";

export default function Search() {
    const category = "Luka Baret";
    return (
        <>
            <Navbar />
            <div className="h-[4.5rem] md:h-[5rem]"></div>
            <div className="flex items-center w-full py-6 px-4 md:px-0">
                <div className="mx-auto items-center md:items-start w-full max-w-screen-xl flex flex-col gap-y-6">
                    <div className="flex gap-x-2 items-center">
                        <Link href="/" className="text-3xl font-semibold">
                            Kategori
                        </Link>
                        <IconChevronsRight />
                        <h1 className="text-3xl font-semibold">{category}</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {new Array(10).fill(undefined).map((_, i) => (
                            <div key={i} className="bg-honeydew flex flex-col gap-y-2 p-4 shadow-lg rounded-md">
                                <Image width={350} height={200} src="/images/dummy/banner.png" alt="banner" className="rounded-md w-full" />
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum totam quia consequatur voluptatibus minus ab debitis optio, sit eligendi provident deserunt
                                        doloremque itaque? Ullam perferendis beatae tempore ad quae!
                                    </p>
                                    <Button asAnchor href="/articles/lorem" type="info" className="flex items-center justify-center text-center gap-x-2">
                                        <IconExternalLink />
                                        <p>Baca Ini</p>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
