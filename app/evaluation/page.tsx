import { TextEffect } from "@/components/text-effect"
import { CircleCheckBig } from "lucide-react"

const services = [
  { title: "PROCJENE VRIJEDNOSTI OPCIJA" },
  { title: "PROCJENE VRIJEDNOSTI DIGITALNE IMOVINE" },
  { title: "PROCJENE VRIJEDNOSTI PRI STATUSNIM SPAJANJIMA I PODJELAMA" },
  { title: "ODREĐIVANJE PRIMJERENOSTI OTPREMNINE U POSTUPCIMA ISTISKIVANJA MALIH DIONIČARA (SQUEEZE OUT)" },
  { title: "PROCJENE VRIJEDNOSTI PRAVA I NEMATERIJALNIH OBLIKA IMOVINE (KONCESIJA, PRAVA KORIŠTENJA, BRANDA, GOODWILL)" },
  { title: "PROCJENE VRIJEDNOSTI KOMPANIJE, KAPITALA, IMOVINE, OBAVEZA ILI PRIVREDNE CJELINE U POSTUPCIMA PRIJENOSA ILI KUPOPRODAJE" },
]
export default function EvaluationConsulting() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold mb-6 md:text-5xl">
          Procjene vrijednosti
        </TextEffect>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">Koje usluge nudimo?</h2>
          {services.map((item, index) => (
            <div key={index} className="my-8 flex flex-row items-center gap-2">
              <CircleCheckBig className="w-6 h-6"/>
              <h4 className="text-lg font-semibold text-balance max-w-3/4">
                 {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
