"use client";
import Image from "next/image";
import Navbar from "./lib/components/navbar";
import Footer from "./lib/components/footer";
import Button from "./lib/components/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { InView } from "react-intersection-observer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const categories = ["Luka Sayat", "Luka Baret", "Luka Bakar", "Luka Memar", "Luka Sengat"];
    const features = [
        {
            title: "Tepat Dalam Menangani",
            description: "Selamat tinggal miskonsepsi medis! Dengan aplikasi LukaRian, kalian bisa menambah wawasan mengenai penanganan luka yang benar dan tepat.",
            component: (
                <div data-aos="fade-left" className="mx-auto flex items-center shadow-lg p-6 rounded-md">
                    <Image data-aos="fade-left" src="/images/svg/selected_options.svg" width={450} height={450} alt="Selected Options by undraw.co"></Image>
                </div>
            ),
        },
        {
            title: "Terverifikasi Ahli",
            description: "Semua artikel yang tersedia disini sudah terverifikasi ahli dan dijamin kepercayaannya. Merasa artikel tidak valid? Laporkan di pusat bantuan.",
            component: (
                <div data-aos="fade-left" className="mx-auto flex items-center shadow-lg p-6 rounded-md">
                    <Image data-aos="fade-left" src="/images/svg/selected_options.svg" width={450} height={450} alt="Selected Options by undraw.co"></Image>
                </div>
            ),
        },
        {
            title: "Berbagi Cara Penanganan",
            description:
                "Dengan LukaRian kalian bisa berbagi cara penanganan luka yang benar dan tepat. Semua orang bisa berkontribusi untuk membantu orang lain yang nantinya akan diverifikasi validitasnya oleh ahli.",
            component: (
                <div data-aos="fade-left" className="mx-auto flex items-center shadow-lg p-6 rounded-md">
                    <Image data-aos="fade-left" src="/images/svg/selected_options.svg" width={450} height={450} alt="Selected Options by undraw.co"></Image>
                </div>
            ),
        },
    ];

    const [currentFeature, setCurrentFeature] = useState(0);

    return (
        <>
            <Navbar />
            <section id="hero" className="w-full items-center bg-honeydew py-12 px-4 md:px-0">
                <div className="max-w-screen-xl mx-auto w-full py-8 grid grid-cols-4 md:grid-cols-7 justify-between items-start">
                    <div className="col-span-4 flex flex-col gap-y-4">
                        <h1 className="font-bold text-3xl md:text-4xl w-full md:w-96 tracking-wide">Menemanimu Mengatasi Luka Harianmu</h1>
                        <p className="w-full text-justify">
                            <span className="font-bold">LukaRian</span> adalah platform yang bertujuan untuk memberikan panduan dan informasi mengenai penanganan pertolongan pertama pada luka-luka
                            luka-luka umum yang dapat terjadi dalam kehidupan sehari-hari.
                        </p>
                        <div>
                            <Button type="success" className="mr-auto">
                                Join Now
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:block col-span-3 ml-auto mr-5">
                        <Image src="/images/svg/Doctor.svg" alt="Doctor" width={350} height={350}></Image>
                    </div>
                </div>
            </section>
            <section id="tabs" className="w-full items-center bg-teagreen px-4 md:px-0">
                <div className="max-w-screen-xl overflow-x-scroll md:overflow-x-hidden gap-x-2 mx-auto w-full py-5 flex justify-evenly">
                    {/* <Swiper wrapperClass="px-10 flex items-center" className="!w-100 " modules={[Pagination, Navigation]} spaceBetween={0} slidesPerView={5} navigation>
                        {categories.map((category, i) => (
                            <SwiperSlide key={i}>
                                <Button type="success" className="whitespace-nowrap">
                                    {category}
                                </Button>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                    {categories.map((category, i) => (
                        <Button key={i} type="success" className="whitespace-nowrap">
                            {category}
                        </Button>
                    ))}
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
                                <InView as="div" threshold={0.5} onChange={(inView) => inView && setCurrentFeature(i)} className="w-fit ml-auto overflow-hidden">
                                    {feature.component}
                                </InView>
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
