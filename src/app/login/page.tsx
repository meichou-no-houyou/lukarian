import Navbar from "../lib/components/navbar";

export default function Login() {
    return (
        <>
            <Navbar />
            <div className="h-[5rem]"></div>

            <div className="w-full grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3">
                <div className="bg-honeydew w-full flex items-start">
                    <div className="max-w-lg mx-auto flex">
                        <h1>aaaa</h1>
                    </div>
                </div>
                <div className="flex items-center col-span-2 justify-center">
                    <div className="h-screen"></div>

                    <form>
                        <div className="flex flex-col mb-2">
                            <input type="text" className="rounded-md shadow" />
                            <input type="password" className="rounder-md shadow" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

{
    /* <div
className="flex items-center justify-center"
style={{
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#f4f4f4", // Ganti dengan warna latar belakang yang Anda inginkan
}}
>
<div
    style={{
        width: "336px",
        height: "auto", // Mengubah tinggi menjadi "auto" agar sesuai dengan kontennya
        padding: "10px",
        display: "flex",
        flexDirection: "column", // Menggunakan flex-direction: column untuk mengatur elemen ke atas-bawah
        alignItems: "center", // Menggunakan alignItems: flex-end untuk menggeser elemen ke kanan
    }}
>
    <h1 className="font-bold" style={{ marginBottom: "10px" }}>
        Masuk
    </h1>
    <input className="email" placeholder="Enter your email" style={{ marginBottom: "10px" }} />
    <input type="password" className="password" placeholder="Enter your password" />
</div>
</div> */
}
