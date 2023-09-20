import Image from "next/image";
import Navbar from "../lib/components/navbar";

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="h-[4.5rem] md:h-[5rem]"></div>
            <div className="flex items-center w-full py-6">
                <div className="mx-auto w-full max-w-screen-xl flex flex-col gap-y-6">
                    {new Array(10).fill(undefined).map((_, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-x-4">
                            <Image width={200} height={100} src="/images/dummy/banner.png" alt="banner" className="rounded-md" />
                            <div className="flex flex-col ">
                                <h1 className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum totam quia consequatur voluptatibus minus ab debitis optio, sit eligendi provident deserunt
                                    doloremque itaque? Ullam perferendis beatae tempore ad quae!
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
