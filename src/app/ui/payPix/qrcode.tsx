import Image from "next/image";
import Button from "../button";

// TO-DO
const iconCopyImg =
    <div>
        <Image
            className="border-woovi border-2 rounded-xl p-2 "
            src="/copy.png"
            alt="Copy Icon"
            width={19}
            height={22}
        />
    </div>
const message = "Clique aqui para copiar QR CODE"

export default function Qrcode() {
    return (
        <div className="flex flex-col items-center justify-center w-max">
            <Image
                className="border-woovi border-2 rounded-xl p-2 "
                src="/qrcode.png"
                alt="QrCode"
                width={332}
                height={332}
            />
            <div>
                <Button type="submit" message={message} />
            </div>
        </div>
    )
}