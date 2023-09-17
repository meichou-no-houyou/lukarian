import { mc } from "@/app/lib/utils/MergeClass";

const colors = {
    warning: "bg-warning text-night",
    success: "bg-success text-white",
    danger: "bg-danger text-white",
    info: "bg-info text-night",
};

export default function Button({ children, type, className }: { children: React.ReactNode; type: keyof typeof colors; className?: string }) {
    return (
        <>
            <button className={mc(`py-2.5 px-5 ${colors[type]} rounded-[10px] font-bold text-md`, className)}>{children}</button>
        </>
    );
}
