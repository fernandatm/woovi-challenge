export default function InfosInst(
    {
        quantInstallments,
        value,
        cardPay
    }: {
        quantInstallments: number;
        value: number;
        cardPay?: boolean
    }) {

    let installments = [];
    const valueStr = value.toFixed(2).toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    let checkIcon;
    let bg;
    let hidden;

    for (var i = 0; i <= quantInstallments; i++) {
        let text;
        let border;
        if (i == 0) {
            text = "entrada no pix";
            border = "border-woovi";
        } else {
            text = "no cartão";
        }
        if (cardPay) {
            if (i == 0) {
                bg = "bg-woovi";
                checkIcon = <img className="m-auto" src="/check.png" />;
            } else {
                bg = "";
                checkIcon = "";
            }
        }

        let eachInst = <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <div className={`border-tag ${border} ${bg}  rounded-full w-4 h-4 border-2 z-10 flex items-center justify-center`}>{checkIcon}</div>
                <p>{`${i + 1}ª ${text}`}</p>
            </div>
            <p className="font-extrabold py-1">{`R$ ${valueStr}`}</p>
            <div className={"absolute top-8 left-1.5 border-2 border-tag h-6 w-0"}></div>
        </div>
        installments.push(eachInst);
    }
    
    return (
        <div className="relative text-lg py-2 border-b-2 border-font-footer">
            {installments}
        </div>
    );
}