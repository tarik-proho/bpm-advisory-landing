import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const links = [
    { name: "facebook", href: "https://www.facebook.com/bpmadvisory/", icon: <Facebook className="w-6 h-6" /> },
    { name: "instagram", href: "https://www.instagram.com/bpmadvisory/", icon: <Instagram className="w-6 h-6" /> },
    { name: "linkedin", href: "https://www.linkedin.com/company/bpm-advisory/", icon: <Linkedin className="w-6 h-6" /> },
];
const services = [
    { name: "Transakcijsko savjetovanje", href: "/transactional" },
    { name: "Finansijsko savjetovanje", href: "/financial" },
    { name: "Procjene vrijednosti", href: "/evaluation" },
    { name: "Kontroling i ostale usluge", href: "/controlling" },
];

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <Link href="/" aria-label="home" className="flex space-x-2">
                                <img src="./bpm-logo.png" alt="logo" className="w-5/6 mx-auto" />
                            </Link>
                            <div className="flex gap-8 mt-4">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        aria-label={link.name}
                                        className="text-foreground hover:text-muted-foreground flex h-8 w-8 items-center justify-center transition-colors"
                                    >
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-medium">Naše usluge</h3>
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    className="text-foreground hover:text-muted-foreground text-sm transition-colors"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-medium">Kontakt</h3>
                            <div className="flex items-center gap-3 my-3">
                                <Phone className="w-6 h-6" /> +387 62 34 24 88
                            </div>
                            <div className="flex items-center gap-3 my-3">
                                <Mail className="w-6 h-6" /> info@bpmadvisory.com
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8">
                    <div className="flex gap-4 flex-row items-center justify-center">
                        <div className="text-muted-foreground text-sm">
                            © {new Date().getFullYear()} BPM Advisory. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );

}
