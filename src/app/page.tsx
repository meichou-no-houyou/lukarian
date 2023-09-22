"use client";
import Navbar from "./lib/components/navbar";
import Footer from "./lib/components/footer";
import Button from "./lib/components/button";
import Observer from "./lib/components/observer";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { UndrawDoctor } from "./lib/svg/UndrawDoctor";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconDiscountCheckFilled } from "@tabler/icons-react";
import { UndrawQuestion } from "./lib/svg/UndrawQuestion";
import { UndrawSharingKnowledge } from "./lib/svg/UndrawSharingKnowledge";
import { UndrawScientist } from "./lib/svg/UndrawScientist";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, []);

    const categories = ["Luka Sayat", "Luka Lecet", "Luka Bakar", "Luka Memar", "Luka Sengat"];
    const features = [
        {
            title: "Tepat Dalam Menangani",
            description: "Selamat tinggal miskonsepsi medis! Dengan aplikasi LukaRian, kalian bisa menambah wawasan mengenai penanganan luka yang benar dan tepat.",
            component: (
                <div data-aos="fade-left" className="w-full flex items-center p-6 rounded-md">
                    <div className="w-full bg-honeydew rounded-lg shadow-lg p-4">
                        <div className="w-full bg-white p-4 rounded-lg shadow prose">
                            <h1 className="font-black text-3xl">Solusi</h1>
                            <ol type="1">
                                <li>Bersihkan luka terlebih dahulu dengan air bersih atau dengan larutan garam hingga bersih</li>
                                <li>Oleskan antibiotik untuk membuat luka tetap lembap, sehingga mempercepat penyembuhan</li>
                                <li>Tutup luka dengan kasa steril yang lembut atau plester dan ganti plester setiap hari</li>
                                <li>Jika perdarahan luka tidak berhenti dan area luka terasa kebas segera periksakan ke dokter.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            ),
            mobileComponent: <UndrawQuestion className="mx-auto" width={200} height={200} />,
        },
        {
            title: "Terverifikasi Ahli",
            description: "Semua artikel yang tersedia disini sudah terverifikasi ahli dan dijamin kepercayaannya. Merasa artikel tidak valid? Laporkan di pusat bantuan.",
            component: (
                <div data-aos="fade-left" className="w-full flex items-center p-6 rounded-md">
                    <div className="w-full bg-honeydew rounded-lg shadow-lg p-4">
                        <div className="w-full bg-white p-2 rounded-lg shadow prose">
                            <div className="w-full rounded-lg p-4 flex justify-between bg-honeydew">
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Artikel Ini Diverifikasi Oleh</h1>
                                    <div className="flex gap-x-4 items-center justify-center flex-col md:flex-row">
                                        <div className="w-20 h-20 rounded-full my-auto">
                                            <Image width={75} height={75} src="/images/avatar/ahmad-jumadi.jpg" alt="User Avatar" className="rounded-full my-auto" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="font-bold text-lg mb-auto">Dr. Ahmad Jumadi, S.Kom, M.Kom</h1>
                                            <h2 className="font-normal text-sm gap-x-1 my-auto flex items-center text-slate-600">
                                                <span className="text-pistachio">
                                                    <IconDiscountCheckFilled />
                                                </span>{" "}
                                                Terverifikasi pada 30 September 2023
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            mobileComponent: <UndrawScientist className="mx-auto" width={250} height={250} />,
        },
        {
            title: "Berbagi Cara Penanganan",
            description:
                "Dengan LukaRian kalian bisa berbagi cara penanganan luka yang benar dan tepat. Semua orang bisa berkontribusi untuk membantu orang lain yang nantinya akan diverifikasi validitasnya oleh ahli.",
            component: (
                <div data-aos="fade-left" className="mx-auto flex items-center flex-col p-6 rounded-md">
                    <UndrawScientist className="mx-auto" width={450} height={450} />
                    <h1 className="font-bold text-xl">LukaRian terbuka untuk semua kalangan! Mulai membuat artikel yang membantu sekarang!</h1>
                </div>
            ),
            mobileComponent: <UndrawSharingKnowledge className="mx-auto" width={250} height={250} />,
        },
    ];

    const [currentFeature, setCurrentFeature] = useState(0);

    const [activePageIndex, setActivePageIndex] = useState<number>(0);
    const carouselContainerRef = useRef<HTMLDivElement | null>(null);
    const totalPages = 20;

    const scrollToPage = (index: number) => {
        if (carouselContainerRef.current) {
            const containerWidth = carouselContainerRef.current.clientWidth;
            carouselContainerRef.current.scrollLeft = containerWidth * index;
        }
    };

    const prevPage = () => {
        const newIndex = activePageIndex - 1;
        setActivePageIndex(newIndex < 0 ? totalPages - 1 : newIndex);
        scrollToPage(newIndex < 0 ? totalPages - 1 : newIndex);
    };

    const nextPage = () => {
        const newIndex = activePageIndex + 1;
        setActivePageIndex(newIndex % totalPages);
        scrollToPage(newIndex % totalPages);
    };

    return (
        <>
            <Navbar />
            <section id="hero" className="w-full items-center bg-honeydew pt-14 px-4 lg:px-0">
                <div className="max-w-screen-xl mx-auto w-full py-14 grid grid-cols-4 md:grid-cols-7 justify-between items-start">
                    <div className="col-span-4 flex flex-col gap-y-4">
                        <h1 className="font-bold text-3xl md:text-5xl w-full md:w-96 tracking-wide">Menemanimu Mengatasi Luka Harianmu</h1>
                        <p className="w-full text-justify">
                            <span className="font-bold">LukaRian</span> adalah platform yang bertujuan untuk memberikan panduan dan informasi mengenai penanganan pertolongan pertama pada luka-luka
                            luka-luka umum yang dapat terjadi dalam kehidupan sehari-hari.
                        </p>
                        <div>
                            <Button asAnchor href="/login" type="success" className="mr-auto">
                                Gabung sekarang!
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:block col-span-3 ml-auto mr-5">
                        <UndrawDoctor width={350} height={350} />
                    </div>
                </div>
            </section>
            <section id="tabs" className="w-full items-center px-4 lg:px-0 mt-5">
                <div className="max-w-screen-xl bg-teagreen rounded-lg overflow-x-scroll md:overflow-x-hidden mx-auto w-full py-5 flex justify-center gap-x-2">
                    {categories.map((category, i) => (
                        <Button asAnchor href={`/search/${category}`} key={i} type="success" className="whitespace-nowrap text-sm md:text-lg">
                            {category}
                        </Button>
                    ))}
                </div>
            </section>
            <section id="testimonial" className="w-full md:max-w-full max-w-screen-sm flex justify-center items-center">
                <div className="w-full py-16">
                    <br />
                    <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-evenly text-center">
                        <h1 className="text-3xl md:text-4xl font-black uppercase">
                            Apa kata <span className="text-honeydew">mereka</span>?
                        </h1>
                        <div className="flex gap-x-4">
                            <Button
                                disabled={activePageIndex === 0}
                                onClick={prevPage}
                                type="success"
                                className="flex items-center justify-center h-full rounded-full p-2 md:p-2 cursor-pointer group focus:outline-none"
                            >
                                <IconChevronLeft />
                            </Button>

                            <Button
                                disabled={activePageIndex === totalPages}
                                onClick={nextPage}
                                type="success"
                                className="flex items-center justify-center h-full rounded-full p-2 md:p-2 cursor-pointer group focus:outline-none"
                            >
                                <IconChevronRight />
                            </Button>
                        </div>
                    </div>
                    <br />
                    <div className="w-full mx-auto flex items-center justify-center overflow-auto max-w-full">
                        <div
                            style={{ scrollBehavior: "smooth" }}
                            ref={carouselContainerRef}
                            className="hide-scrollbar max-w-xs flex md:max-w-xs lg:max-w-full w-full select-none gap-10 overflow-auto cursor-grab"
                        >
                            {new Array(totalPages).fill(undefined).map((_, i) => (
                                <div key={i} className="flex flex-col px-4 py-6 bg-honeydew w-72 md:w-80 aspect-square rounded-md flex-none">
                                    <div className="flex flex-col items-center gap-x-3">
                                        <div className="w-16 h-16 rounded-full overflow-hidden">
                                            <Image alt="avatar" src="/images/dummy/avatar.jpg" width={64} height={64} />
                                        </div>
                                        <h1 className="text-lg font-bold mt-2">Achmad Tirto Sudiro</h1>
                                    </div>
                                    <p className="font-semibold text-center mb-4">5.5/10</p>
                                    <p className="text-justify">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, assumenda. Tenetur impedit beatae quos minus? Et, tenetur repellendus porro, rem iusto nisi ex,
                                        error possimus reprehenderit consectetur amet necessitatibus voluptate.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="features" className="w-full items-center">
                <div className="h-[5rem] lg:h-[10rem]"></div>
                <div className="flex items-center">
                    <h1 className="text-center font-black uppercase text-xl md:text-3xl w-96 mx-auto">
                        Apa yang akan kamu dapatkan di <span className="text-honeydew text-2xl md:text-4xl">LukaRian</span>?
                    </h1>
                </div>

                <div className="max-w-screen-xl mx-auto w-full py-5 justify-between items-start hidden lg:flex">
                    <nav className="sticky top-32">
                        {features.map((feature, i) => (
                            <div key={i} className={""}>
                                <h1 className={`transition-all ease-out duration-300 font-black text-5xl uppercase w-96 tracking-wide ${currentFeature === i ? "text-night" : "text-honeydew"}`}>
                                    {feature.title}
                                </h1>
                            </div>
                        ))}
                        <p className="mt-2 text-night">{features[currentFeature].description}</p>
                    </nav>
                    <div className="w-full flex flex-col gap-y-96">
                        {features.map((feature, i) => (
                            <>
                                <Observer
                                    key={i}
                                    observerOptions={{
                                        rootMargin: "0px",
                                        threshold: 0.1,
                                    }}
                                    onChange={(inView) => {
                                        inView && setCurrentFeature(i);
                                    }}
                                    className="w-3/4 ml-auto flex overflow-hidden"
                                >
                                    {feature.component}
                                </Observer>
                            </>
                        ))}
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto w-full py-5 flex flex-col gap-y-5 items-center justify-center lg:hidden overflow-hidden">
                    {features.map((feature, i) => (
                        <div key={i} data-aos="fade-left" className="w-80 mx-5 gap-y-4 flex-col flex justify-center items-center p-6 rounded-md bg-honeydew">
                            {feature.mobileComponent}
                            <h1 className="font-bold text-2xl text-center">{feature.title}</h1>
                            <p className="text-justify">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <br></br>
            <br></br>
            <Footer />
        </>
    );
}
