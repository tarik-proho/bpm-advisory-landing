import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "Transakcijsko savjetovanje",
    description: "Stručno vođenje kroz kompleksne poslovne transakcije i strateške odluke.",
    href: "/transactional",
  },
  {
    title: "Finansijsko savjetovanje",
    description: "Sveobuhvatna finansijska analiza i strateško planiranje.",
    href: "/financial",
  },
  {
    title: "Procjene vrijednosti",
    description: "Precizne procjene vrijednosti kompanija i imovine.",
    href: "/evaluation",
  },
  {
    title: "Kontroling i ostale usluge",
    description: "Prilagođeni savjeti za rješavanje složenih poslovnih izazova.",
    href: "/controlling",
  }
];

export function Services() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl">Naše usluge</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BPM Advisory nudi sveobuhvatne konsultantske usluge dizajnirane da transformišu vaše poslovne izazove u prilike za rast i uspjeh.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((item, index) => (
            <Card key={index} className="overflow-hidden w-full">
              <CardHeader>
                <CardTitle className="line-clamp-4 text-center h-12">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-center text-muted-foreground">
                  {item.description}                
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href={item.href}>Saznaj više</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};