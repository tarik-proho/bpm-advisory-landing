import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "../contact-dialog";

export function CallToAction() {
    return (
        <section className="w-full bg-[#1B4F95] text-white border-t py-8 justify-around items-center flex flex-col md:flex-row gap-4">
            <h3 className="text-xl font-semibold tracking-tight">Za uspješna rješenja na vašoj poslovnoj frekvenciji</h3>
            <ContactDialog />
        </section>
    );
}