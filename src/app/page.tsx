"use client";
import Navbar from "./lib/components/navbar";
import Footer from "./lib/components/footer";
import Button from "./lib/components/button";
import Observer from "./lib/components/observer";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { UndrawSelectedOptions } from "./lib/svg/UndrawSelectedOptions";
import { UndrawDoctor } from "./lib/svg/UndrawDoctor";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 250,
        });
    }, []);

    const categories = ["Luka Sayat", "Luka Baret", "Luka Bakar", "Luka Memar", "Luka Sengat"];
    const features = [
        {
            title: "Tepat Dalam Menangani",
            description: "Selamat tinggal miskonsepsi medis! Dengan aplikasi LukaRian, kalian bisa menambah wawasan mengenai penanganan luka yang benar dan tepat.",
            component: (
                <div key={1} data-aos="fade-left" className="mx-auto flex items-center shadow-lg p-6 rounded-md">
                    <UndrawSelectedOptions />
                </div>
            ),
        },
        {
            title: "Terverifikasi Ahli",
            description: "Semua artikel yang tersedia disini sudah terverifikasi ahli dan dijamin kepercayaannya. Merasa artikel tidak valid? Laporkan di pusat bantuan.",
            component: (
                <div key={2} data-aos="fade-left" className="mx-auto flex items-center shadow-lg p-6 rounded-md">
                    <UndrawSelectedOptions />
                </div>
            ),
        },
        {
            title: "Berbagi Cara Penanganan",
            description:
                "Dengan LukaRian kalian bisa berbagi cara penanganan luka yang benar dan tepat. Semua orang bisa berkontribusi untuk membantu orang lain yang nantinya akan diverifikasi validitasnya oleh ahli.",
            component: (
                <div key={3} data-aos="fade-left" className="mx-auto flex items-center shadow-lg p-6 rounded-md">
                    <UndrawSelectedOptions />
                </div>
            ),
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
            <section id="hero" className="w-full items-center bg-honeydew pt-14 px-4 md:px-0">
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
                    <div className="hidden md:block col-span-3 ml-auto mr-5">
                        <UndrawDoctor width={350} height={350} />
                    </div>
                </div>
            </section>
            <section id="tabs" className="w-full items-center px-4 md:px-0 mt-5">
                <div className="max-w-screen-xl bg-teagreen rounded-lg overflow-x-scroll md:overflow-x-hidden mx-auto w-full py-5 flex justify-center space-x-10 px-5">
                    {categories.map((category, i) => (
                        <Button asAnchor href={`/search/${category}`} key={i} type="success" className="whitespace-nowrap">
                            {category}
                        </Button>
                    ))}
                </div>
            </section>
            <section id="testimonial" className="w-full flex items-center">
                <div className="max-w-screen-xl mx-auto py-16">
                    <br />
                    <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-evenly text-center">
                        <h1 className="text-4xl font-black uppercase">
                            Apa kata{" "}
                            <span className="text-honeydew" style={{ WebkitTextStroke: "0.1px black" }}>
                                mereka
                            </span>
                            ?
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
                    <div className="container max-w-screen-xl w-full mx-auto flex items-center justify-between">
                        <div
                            style={{ scrollBehavior: "smooth" }}
                            ref={carouselContainerRef}
                            className="hide-scrollbar max-w-xs flex md:max-w-md lg:max-w-full w-full select-none gap-10 overflow-auto cursor-grab"
                        >
                            {new Array(totalPages).fill(undefined).map((_, i) => (
                                // flex w-full max-w-sm shrink-0 flex-col items-start justify-between gap-4 p-10 font-mulish text-black md:aspect-square md:max-w-md lg:aspect-auto lg:gap-8 xl:aspect-square xl:max-w-lg
                                <div key={i} className="flex flex-col px-4 py-6 bg-honeydew w-80 aspect-square rounded-md flex-none">
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
                <div className="h-[10rem]"></div>
                <div className="max-w-screen-xl mx-auto w-full py-5 justify-between items-start hidden md:flex">
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
                    <div className="w-full flex flex-col gap-y-60">
                        {features.map((feature, i) => (
                            <>
                                <Observer
                                    observerOptions={{
                                        rootMargin: "25px",
                                        threshold: 0.1,
                                    }}
                                    onChange={(inView) => {
                                        inView && setCurrentFeature(i);
                                    }}
                                    className="w-fit ml-auto overflow-hidden"
                                >
                                    {feature.component}
                                </Observer>
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
