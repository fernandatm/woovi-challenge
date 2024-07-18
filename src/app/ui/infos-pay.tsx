import Image from "next/image";
import InfosInst from "./infos-inst";

export default function InfosPay(
    {
        quantInstallments, 
        value, 
        total
    }: 
    {
        quantInstallments: number;
        value: number;
        total: number;
    }

) {
    
    const totalStr = total.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const currentDate = new Date();
    // don't know why the error in number
    function addZero(number) {
        if (number <= 9){
            return "0" + number;
        } else {
            return number;
        }
    }

    const deadline = new Date();
    deadline.setDate(currentDate.getDate() + 2);

    const curDate = addZero(deadline.getDate());
    const curMonth = addZero(deadline.getMonth() + 1);
    const curHours = addZero(deadline.getHours());
    const curMin = addZero(deadline.getMinutes());

    const textDeadline = `
        ${curDate}/${curMonth}/${deadline.getFullYear()} - 
        ${curHours}:${curMin}
        `;

    const arrowImg =
        <Image
            className="m-3 cursor-pointer"
            src="/arrow.png"
            alt="Arrow"
            width={10}
            height={14}
        />;
    return (
        <div className="w-full my-1 text-center">
            <Warn title={"Prazo de pagamento: "} text={textDeadline} />
            <InfosInst  quantInstallments={quantInstallments} value={value} />
            <Total pLeft={"CET: 0,32%"} pRight={`Total: R$ ${totalStr}`} />
            {/* don't know why the error in number */}
            <Total bold pLeft={"Como funciona?"} pRight={arrowImg} />
            <Warn sm title={"Identificador: "} text={"2c1b951f356c4680b13ba1c9fc889c47"} />
        </div>
    )
}

export function Warn({ title, text, sm }: { title: string; text: string; sm?: boolean}) {
    let textSize;
    sm ? textSize = "text-sm" : "text-base"

    return (
        <div className={`${textSize} p-5`}>
            <p className="text-font-footer">{title}</p>
            <p className="font-extrabold">{text}</p>
        </div>
    )
}

export function Total({ pLeft, pRight, bold}: { pLeft: string; pRight: string; bold?: boolean}) {
    let isBold;
    bold ? isBold="font-extrabold" : isBold="";
    return (
        <div className={`${isBold} flex items-end justify-between py-5 border-b-2 border-font-footer`}>
        <p className="pt-1 text-sm">{pLeft}</p>
        <p className="pt-1 text-lg">{pRight}</p>
    </div>
    );
}
