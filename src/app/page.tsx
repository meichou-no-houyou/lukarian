"use client";
import Navbar from "./lib/components/navbar";
import Footer from "./lib/components/footer";
import Button from "./lib/components/button";
import Observer from "./lib/components/observer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { UndrawSelectedOptions } from "./lib/svg/UndrawSelectedOptions";
import { UndrawDoctor } from "./lib/svg/UndrawDoctor";
import { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "./lib/components/carousel";

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
                            <Button type="success" className="mr-auto">
                                Join Now
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:block col-span-3 ml-auto mr-5">
                        <UndrawDoctor width={350} height={350} />
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
            <section id="testimonial" className="w-full flex items-center">
                <div className="max-w-screen-xl mx-auto py-5">
                    <Carousel
                        items={new Array(20).fill(undefined).map((_, i) => (
                            <div key={i} className="flex flex-col px-4 py-6 shadow-lg bg-honeydew w-fit rounded-md">
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
                    />
                    {/* <Swiper slidesPerView={5} navigation grabCursor modules={[Navigation]}>
                        {new Array(10).fill(undefined).map((_, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col px-4 py-6 shadow-lg bg-honeydew w-80 rounded-md">
                                    <div className="flex flex-col items-center gap-x-3">
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <Image alt="avatar" src="/images/dummy/avatar.jpg" width={48} height={48} />
                                        </div>
                                        <h1 className="text-lg font-bold">Achmad Tirto Sudiro</h1>
                                    </div>
                                    <p className="font-semibold text-center mb-4">5.5/10</p>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, assumenda. Tenetur impedit beatae quos minus? Et, tenetur repellendus porro, rem iusto nisi ex,
                                        error possimus reprehenderit consectetur amet necessitatibus voluptate.
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
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
