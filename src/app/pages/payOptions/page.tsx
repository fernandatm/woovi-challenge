import CardsWrapper from "@/app/ui/payOptions/cards-wrapper";
import Image from "next/image";

const name = "João";
const message = "como você quer pagar?"

const value = 30500;

export default function PayOptions() {
    return (
        <div className="w-full py-2 max-w-md">
            <div className="relative py-5 justify-center text-center">
                <h1 className="text-2xl font-extrabold text-font-main">{name}, {message}</h1>
            </div>
            <div className="relative w-full flex flex-col items-center gap-10 border-1 border-tag rounded-lg">
                <CardsWrapper value={value} type="pix" />
                <CardsWrapper value={value} type="pix parcelado" />

            </div>



        </div>
    )
}