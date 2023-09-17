import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Button from "./button";

export function CarouselItem({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="absolute w-full duration-700 ease-in-out"></div>
        </>
    );
}

export function Carousel({ children }: { children: React.ReactNode }) {
    <div className="relative w-full">
        <div className="relative overflow-hidden z-20">{children}</div>
        <Button type="success" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <IconChevronLeft />
        </Button>
        <Button type="success" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <IconChevronRight />
        </Button>
    </div>;
}
