import Card from "./card";
import CardWrapperTitle from "./cards-wrapper-title";

export default function CardsWrapper(
    { value, type }: { value: number; type: string }
) {
    let installmentInfoList = [];
    let cards = [];
    let card;
    let title;

    
    for (var i = 0; i <= 10; i++) {
        let fee = 0;
        let quantInstallments = i;
        let total = value;

        switch ((quantInstallments)) {
            case 1:
                fee = 0.00;
                break;
            case 2:
                fee = 0.0032786;
                break;
            case 3:
                fee = 0.003934;
                break;
            case 4:
                fee = 0.013115;
                break;
            case 5:
                fee = 0.032787;
                break;
            case 6:
                fee = 0.039344;
                break;
                case 7:
                    fee = 0.042621;
                break;
                case 8:
                fee = 0.0499;
                break;
                case 9:
                    fee = 0.0534;
                    break;
                    case 10:
                        fee = 0.0598;
                        break;
                    }
                    
                    total += total * fee;
                    let instValue = parseFloat((total / quantInstallments).toFixed(2));
                    let minInstallment = 4500;
                    
                    if (instValue >= minInstallment) {
                        installmentInfoList.push({
                key: quantInstallments,
                fee: fee,
                instValue: instValue.toFixed(2),
                total: Math.round(total).toFixed(2)
            });
        }
    }
    
    for (var i = 1; i < installmentInfoList.length; i++) {
        card = <Card
            key={i}
            fee={installmentInfoList[i].fee}
            quantInstallments={installmentInfoList[i].key}
            instValue={parseFloat(installmentInfoList[i].instValue)}
            total={parseFloat(installmentInfoList[i].total)} />

        cards.push(card);
    }

    switch (type) {
        case "pix":
            // don't know will te error in cards ???
            cards = cards.shift();
            title = "pix";
            break;
        case "pix parcelado":
            const removed = cards.splice(0, 1);
            title = "pix parcelado";
            break;
    }

    return (
        <div className="relative w-full flex flex-col border-2 border-tag rounded-lg">
            <CardWrapperTitle title={`${title}`} />
            {cards}
        </div>
    )
}