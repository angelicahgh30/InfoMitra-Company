import { kotakTestimoni } from "../data/data-testimoni";

export function KomentarBox() {
    return (
        <>
            <div className="mx-17 border-b-2 font-bold text-3xl">Testimoni</div> 
            <div className="grid my-5 gap-5 mx-17 h-screen overflow-y-scroll" id="semua_komentar">
                    {kotakTestimoni.map((komentar) => (
                <div key={komentar.id} className="bg-white border-2 h-50 overflow-hidden rounded-lg flex p-4 gap-4 transition-all duration-300 hover:-translate-y-2">

                    {/* Gambar */}
                        <img src={komentar.gambar} alt={`Brosur ${komentar.id}`}className="w-40 h-40 object-cover rounded-xl"/>

                    {/* Teks komentar di sisa ruang */}
                    <div className="flex-1 h-40 overflow-hidden flex flex-col justify-center bg-gray-200 border-2">
                        <p className="font-semibold truncate">{komentar.nama}</p>
                        <p className="text-center mt-1 line-clamp-3">{komentar.isi}</p>
                    </div>

                </div>
                ))}
            </div>

        </>
    );
}  