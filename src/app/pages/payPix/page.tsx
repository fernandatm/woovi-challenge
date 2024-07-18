import InfosPay from "@/app/ui/infos-pay";
import Qrcode from "@/app/ui/payPix/qrcode";

const name = "João";
const value = 30500;
const valueStr = value.toFixed(2).toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const message =
    <div className="w-full relative py-5 justify-center text-center text-2xl font-extrabold text-font-main">
        <p>{`${name}, pague a entrada de`}</p>
        <p>{`R$ ${valueStr} no pix`}</p>
    </div>

const instValue = 15300;
const quantInstallments = 1;


export default function PayPix() {
    return (
        <div className="w-full max-w-md flex flex-col items-center ">
            {message}
            <Qrcode />
            <InfosPay quantInstallments={quantInstallments} value={instValue} total={value} cardPay={false} />
        </div>
    )
}