export default function Banner({ span, text }: { span: string; text: string }) {
    return (
        <div className="bg-blue-banner-discount my-1 rounded-md w-full">
        <p className="text-font-banner-discount text-base py-1 pl-2 "><span className="font-extrabold">{span}</span>{text}</p>
    </div>
    )
}