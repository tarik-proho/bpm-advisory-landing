import { BookOpenCheck, BriefcaseBusiness, ChartPie, Handshake, Kanban, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
    {
        title: "Inovativna rješenja",
        description: "Pristupamo svakom izazovu kreativno kako bismo postigli najbolje rezultate za naše klijente.",
        icon: <Lightbulb className="w-6 h-6"/>
    },
    {
        title: "Multidisciplinarnost",
        description: "Dugogodišnje iskustvo u svim sferama poslovnog i transakcijsku savjetovanja uz jedinstvenu mrežu poslovnih kontakata i partnerstava omogućuje nam multidisciplinarnost u pristupu te angažmana kompleksnim zadacima.",
        icon: <ChartPie />
    },
    {
        title: "Strateško partnerstvo",
        description: "Radimo zajedno s vama kako bismo osigurali uspjeh kroz dugoročna partnerstva.",
        icon: <BriefcaseBusiness />
    },
    {
        title: "Prilagodljive usluge",
        description: "Nudimo usluge prilagođene vašim potrebama, bilo da se radi o savjetovanju ili implementaciji rješenja.",
        icon: <Handshake />
    },
    {
        title: "Poverenje i transparentnost",
        description: "Osiguravamo transparentne poslovne procese koji grade povjerenje između nas i naših klijenata.",
        icon: <BookOpenCheck />
    },
    {
        title: "Upravljanje projektima",
        description: "Upravljamo vašim projektima od početka do kraja kako bismo osigurali pravilan tijek i uspjeh.",
        icon: <Kanban />
    }
];

export function Features() {
    return (
        <section className="w-full py-16">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                    <Card key={index} className="overflow-hidden w-full">
                        <CardHeader className="grid grid-cols-1  h-10">
                            {item.icon}
                            <CardTitle className="-mt-8 ml-5 text-center"> {item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-center text-muted-foreground h-35">
                            {item.description}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};