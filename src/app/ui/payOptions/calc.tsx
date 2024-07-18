import Card from "@/app/ui/payOptions/card";

export default function Calc(
    { value }: { value: number }) {

    // let installmentInfoList = [];
    let cards = [];
    let card;
    const maxInstallments = 10;

    for (var i = 0; i <= maxInstallments; i++) {
        let fee = 0;
        let quantInstallments = i;
        let total = 0;

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

        total = value * fee;
        let instValue = total / quantInstallments;
        let minInstallment = 4500;

        if (instValue >= minInstallment) {
            card = <Card
            key={i}
            fee={fee}
            quantInstallments={i}
            instValue={instValue}
            total={total} />
            // installmentInfoList.push({
            //     key: quantInstallments,
            //     instValue: instValue.toFixed(2),
            //     total: Math.round(total).toFixed(2)
            // });
            cards.push(card)
        }
    }

    // for (var i = 1; i < installmentInfoList.length; i++) {

    //     card = <Card
    //         key={i}
    //         quantInstallments={installmentInfoList[i].key}
    //         instValue={parseFloat(installmentInfoList[i].instValue)}
    //         total={parseFloat(installmentInfoList[i].total)} />

    //     cards.push(card);
    // }


    return { cards }
}