import Navbar from "../lib/components/navbar";
import Image from "next/image";
import { IconEdit } from "@tabler/icons-react";
import Button from "../lib/components/button";

export default function Profile() {
    const navs = ["Your Articles", "Liked", "History"];
    return (
        <>
            <Navbar />
            <div className="h-[4.5rem] md:h-[5rem]"></div>
            <div style={{ backgroundImage: `url(/images/dummy/banner.png)` }} className="bg-cover bg-no-repeat bg-center  relative w-full h-96">
                <div className="absolute w-full h-full inset-x-0 inset-y-0 bg-gradient-to-t from-black z-0"></div>
                <div className="flex items-center w-full h-full bottom-0">
                    <div className="flex flex-col justify-end max-w-screen-xl w-full h-full mx-auto z-10">
                        <div className="flex gap-x-4">
                            <Image src="/images/dummy/avatar.jpg" alt="Avatar" width={150} height={150} className="rounded-t-md shadow" />
                            <div className="col-span-2 text-white self-end">
                                <h1 className="font-bold text-xl flex gap-x-2 items-center">
                                    Achmad Akmal Tirto Fauzi Nova
                                    <span className="font-normal">
                                        <Button type="info" className="p-2 md:p-2">
                                            <IconEdit />
                                        </Button>
                                    </span>
                                </h1>
                                <p className="w-[50%] my-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
                                    consectetur, ultrices mauris.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="tabs" className="w-full items-center bg-teagreen px-4 md:px-0">
                <div className="max-w-screen-xl overflow-x-scroll md:overflow-x-hidden gap-x-2 mx-auto w-full py-5 flex justify-evenly">
                    {navs.map((nav, i) => (
                        <Button key={i} type="success" className="whitespace-nowrap">
                            {nav}
                        </Button>
                    ))}
                </div>
            </section>
        </>
    );
}
