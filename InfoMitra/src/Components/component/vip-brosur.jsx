import { useEffect, useRef, useState } from "react";
import { kotakbanner } from "../data/data-vip-brosur";

export function BrosurVip() {
    const sliderRef = useRef(null);
    const [posisi, setPosisi] = useState(0);
    const speed = 2; // 🔥 kecepatan geser (semakin besar semakin cepat)

    useEffect(() => {
        const slider = sliderRef.current;

        function gerak() {
            setPosisi(prev => {
                let next = prev - speed;
                if (Math.abs(next) > slider.scrollWidth / 2) {
                    return 0;
                }
                return next;
            });
        }

        let jalan = setInterval(gerak, 15);

        // Pause saat hover
        slider.addEventListener("mouseenter", () => clearInterval(jalan));
        slider.addEventListener("mouseleave", () => {
            jalan = setInterval(gerak, 15);
        });

        return () => clearInterval(jalan);
    }, []);

    // tombol geser manual
    const geserKiri = () => setPosisi(prev => prev + 300);
    const geserKanan = () => setPosisi(prev => prev - 300);

    return (
        <div className="relative overflow-x-hidden bg-[#ececec] py-5 mb-5">

            {/* Track slider */}
            <div
                ref={sliderRef}
                className="flex w-max transition-transform duration-0"
                style={{ transform: `translateX(${posisi}px)` }}
            >
                {/* baris asli */}
                {kotakbanner.map((banner) => (
                    <div
                        key={banner.id}
                        className="min-w-[300px] mx-4 bg-white rounded-xl shadow-md
                                   hover:-translate-y-2 transition-all cursor-pointer"
                    >
                        <img
                            src={banner.gambar}
                            alt=""
                            className="w-full h-[250px] object-cover rounded-xl"
                        />
                    </div>
                ))}

                {/* duplikat agar infinite */}
                {kotakbanner.map((banner) => (
                    <div
                        key={`copy-${banner.id}`}
                        className="min-w-[300px] mx-4 bg-white rounded-xl shadow-md
                                   hover:-translate-y-2 transition-all cursor-pointer"
                    >
                        <img
                            src={banner.gambar}
                            alt=""
                            className="w-full h-[250px] object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>

            {/* Tombol kiri */}
            <button
                onClick={geserKiri}
                className="absolute top-1/2 left-5 -translate-y-1/2
                           bg-black/40 text-white w-10 h-10 rounded-full
                           flex items-center justify-center hover:bg-black/70 transition "
            >
                ‹
            </button>

            {/* Tombol kanan */}
            <button
                onClick={geserKanan}
                className="absolute top-1/2 right-5 -translate-y-1/2
                           bg-black/40 text-white w-10 h-10 rounded-full
                           flex items-center justify-center hover:bg-black/70 transition "
            >
                ›
            </button>

        </div>
    );
}
