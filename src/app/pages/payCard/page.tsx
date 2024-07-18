import InfosPay from "@/app/ui/infos-pay";
import FormCard from "@/app/ui/payCard/formCard";

export default function PayCard() {
    // receive data from payOptions after calculating each fee, quantInstallments, instValue and total
    const name = "João";
    const value = 30500;
    
    const quantInst = 2;
    const quantInstallmentsLeft = quantInst - 1;
    const instValue = value / quantInst;

    const message =
        <div className="w-full relative py-5 justify-center text-center text-2xl font-extrabold text-font-main">
            <p className="w-96 mx-auto">{`${name}, pague o restante em  ${quantInstallmentsLeft}x no cartão`}</p>
        </div>

    return (
        <div className="w-full max-w-md flex flex-col items-center ">
            {message}
            <FormCard />
            <InfosPay cardPay quantInstallments={quantInstallmentsLeft} value={instValue} total={value} />
        </div>
    )
}