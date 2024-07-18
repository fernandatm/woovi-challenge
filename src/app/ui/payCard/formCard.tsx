import Button from "../button"


export default function FormCard() {
    return (
        <div className="w-full flex flex-col">
            <InputField type={"text"} label={"Nome completo"} placeholder={"Nome completo"} />
            <InputField type={"text"} label={"CPF"} placeholder={"000.000.000-00"} />
            <InputField type={"text"} label={"Número do cartão"} placeholder={"Número do cartão"} />
            <div className="flex gap-4 w-fit">
                <InputField type={"text"} label={"Vencimento"} placeholder={"Vencimento"} halfInput />
                <InputField type={"number"} label={"CVV"} placeholder={"CVV"} maxLength={3} halfInput />
            </div>
            <SelectOptions label={"Parcelas"} />
            <Button type={"submit"} message={"Pagar"} />

        </div>
    )
}

export function InputField(
    { 
        type, 
        label, 
        placeholder,
        halfInput,
        maxLength 
    }: {
        type: string;
        label: string;
        placeholder: string;
        halfInput?: boolean;
        maxLength?: number;
    }) {

    return (
        <div className="relative flex flex-col border-2 border-tag h-14 mb-5 rounded-lg last:mb-0">
            <label className="absolute -top-4 left-3 text-sm z-20 bg-font-banner-discount p-1 place peer-placeholder-shown:invisible peer-focus:scale-75 peer-focus:translate-y-4 w-auto" htmlFor="inputField">{label}</label>
            <input className="w-full mx-4 my-auto bg-transparent outline-none" type={`${type}`} placeholder={`${placeholder}`} id="inputField" />
        </div>
    )
}

export function SelectOptions(
    { 
        label 
    }: { 
        label: string; 
    }) {
    
    return (
    <div className="relative flex flex-col border-2 border-tag h-14 mb-5 rounded-lg last:mb-0">
        <label className="absolute -top-4 left-3 text-sm z-20 bg-font-banner-discount p-1 place peer-placeholder-shown:invisible peer-focus:scale-75 peer-focus:translate-y-4 w-auto" htmlFor="options">{label}</label>
        <select className="w-full mx-4 my-auto bg-transparent outline-none" id="options" >
            <option key={1} className="w-full mx-4 my-auto bg-transparent outline-none" value="first" selected>1ª parcela</option>
            <option key={2} className="w-full mx-4 my-auto bg-transparent outline-none" value="first">2ª parcela</option>
            <option key={3} className="w-full mx-4 my-auto bg-transparent outline-none" value="first">3ª parcela</option>
            <option key={4} className="w-full mx-4 my-auto bg-transparent outline-none" value="first">4ª parcela</option>
        </select>
    </div>

    )
}