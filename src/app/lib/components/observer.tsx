"use client";
import { DetailedHTMLProps, useEffect, useRef } from "react";

export default function Observer({
    children,
    onChange,
    observerOptions,
    ...props
}: { children: React.ReactNode; onChange: (isView: boolean) => void; observerOptions?: IntersectionObserverInit } & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    const ref = useRef<any>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            onChange(entry.isIntersecting);
        }, observerOptions);
        if (ref) observer.observe(ref.current!);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div {...props} ref={ref}>
            {children}
        </div>
    );
}
