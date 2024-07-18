import Banner from "./card-banner";

export default function Card(
    {
        key,
        fee,
        quantInstallments,
        instValue,
        total
    }
        : {
            key: number;
            fee: number;
            quantInstallments: number;
            instValue: number;
            total: number
        }
) {
    const valueStr = "R$ " + instValue.toFixed(2).toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const totalStr = "R$ " + total.toFixed(2).toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const first = (quantInstallments === 1);
    const rateCashback = .03;
    const spanCashback = (instValue * rateCashback).toFixed(2).toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const textCashback = " de volta no seu Pix na hora";

    const bestOption = (quantInstallments === 4);
    const spanBestOption = "-3% de juros: ";
    const textBestOption = "Melhor opção de parcelamento";

    return (
        <div className="relative p-5 sm:w-full md:max-w-300 lg:max-w-400 h-auto border-b-2 border-tag rounded-b-none last:border-b-0">
            <div className="flex justify-between mt-1">
                <h2 className="text-2xl"><span className="font-extrabold">{`${quantInstallments}x`}</span> {valueStr}</h2>
                <button className="border-2 border-tag rounded-full w-6 h-6 cursor-pointer">
                </button>
            </div>

            {first ?
                <div>
                    <p className="text-base font-bold text-woovi">Ganhe <span className="font-extrabold">{`${rateCashback * 100}%`}</span> de cashback</p>
                    <Banner span={`R$ ${spanCashback}`} text={textCashback} />
                </div>
                :
                <p className="text-base text-font-total font-semibold">{`Total: ${totalStr}`}</p>
            }
            {bestOption ? <Banner span={spanBestOption} text={textBestOption} /> : ''}
        </div>
    )
}