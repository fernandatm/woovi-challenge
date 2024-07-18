export default function CardWrapperTitle({ title }: { title: string }) {
    return (
        <div className="bg-tag min-w-16 h-6 px-4 rounded-full flex justify-center items-center absolute -top-3 left-5 z-10" >
            <p className="capitalize text-center text-sm font-extrabold">{title}</p>
        </div>
    )
}