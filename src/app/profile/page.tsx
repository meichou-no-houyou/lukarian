import Navbar from "../lib/components/navbar";
import Image from "next/image";

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="h-[5rem]"></div>
            <section id="hero" className="w-full items-center bg-honeydew">
                <div className="">
                    <Image src="/images/dummy/banner.png" alt="Sharing Knowledge" width={1500} height={322}></Image>
                    <div className="text-white text-3xl font-rubik absolute bottom-1 inset-x-5">
                        <h1 className="grid grid-cols-2 text-center">Achmad Akmal Sudiro Fauzi</h1>
                    </div>
                </div>
            </section>
        </>
    );
}
