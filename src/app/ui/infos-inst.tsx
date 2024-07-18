export default function InfosInst({ quantInstallments, value, cred }: { quantInstallments: number; value: number; cred?: boolean}) {
            let checkIcon = "";
            let checked = "";
            // TO DO
            cred ? checkIcon = <img className="m-auto" src="/check.png" /> : checkIcon;
            cred ? checked = "bg-woovi" : "";
            let installments = [];
            const valueStr = value.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            for (var i = 0; i <= quantInstallments; i++) {
                let text;
                let border;
                i === 0 ? text = "entrada no pix" : text = "no cartão";
                i === 0 ? border = "border-woovi" : border = "border-tag";
                let eachInst = <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className={`${border} rounded-full w-4 h-4 border-2 z-10 flex items-center justify-center`}>{checkIcon}</div>
                        <p>{`${i + 1}ª ${text}`}</p>
                    </div>
                    <p className="font-extrabold py-1">{`R$ ${valueStr}`}</p>
                </div>
                installments.push(eachInst);
            }
        
            return (
                <div className="text-lg py-2 border-b-2 border-font-footer">
                    {installments}
                </div>
            );
        }