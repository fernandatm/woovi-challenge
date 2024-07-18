export default function Button(
    { 
        type, 
        message }
    : 
    { 
        type: "submit" | "reset" | "button" | undefined; 
        message: string
    }) {
        
    return (
        <button className="bg-blue-banner-discount text-font-banner-discount text-lg mt-5 py-2 px-6 rounded-lg w-full" type={type}>{message}</button>
    )
}