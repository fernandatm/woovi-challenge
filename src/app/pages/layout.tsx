import React from "react";
import Image from "next/image";
import { nunito } from "@/app/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className={`${nunito.className} flex min-h-screen w-full flex-col items-center justify-center lg:mx-auto p-4 bg-font-banner-discount `}>
            <div className="min-h-dvh w-full flex flex-col items-center">
                <div className="h-auto w-auto py-5 flex items-end justify-center">
                    <Image
                        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/Logo-green-woovi.png"
                        alt="Next.js Logo"
                        width={123}
                        height={36}
                        priority
                    />
                </div>
                {children}
                <div className="flex items-center justify-center gap-2  w-full my-8 mx-auto">
                    <Image
                        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/security.png"
                        alt="Security Symbol"
                        width={15}
                        height={18}
                        priority
                    />
                    <p className="text-sm text-font-footer">Pagamento 100% seguro via: </p>
                    <Image
                        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/Logo.png"
                        alt="Next.js Logo"
                        width={57}
                        height={16}
                        priority
                    />
                </div>
            </div>
        </main>
    )
}