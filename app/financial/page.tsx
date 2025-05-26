import { TextEffect } from "@/components/text-effect"
import { CircleCheckBig } from "lucide-react";

const services = [
  {
    title: "PROVOĐENJE FINANSIJSKE ANALIZE",
    description: `Provedbom financijske analize u domenama aktivnosti, profitabilnost, likvidnosti, finansijske stabilnosti i investiranja detektiramo karakteristike vašeg poslovanja te utvrđujemo problematične elemente, 
čime osiguravamo podlogu za donošenje odluka u vezi s optimizacijom poslovanja, odabirom izvora i strukture finansiranja, definiranjem potencijala investiranja i slično.`},

  {
    title: "IZRADA FINANSIJSKIH MODELA",
    description: `Izradom finansijskih modela cjelokupno poslovanje ili projekt pretaču se u logičan i dosljedan brojčani prikaz koji sadržava kako povijesne finansijske podatke, tako i projekcije budućih. 
Na taj se način omogućava planiranje te provođenje scenario i what if analiza osjetljivosti, pa je postojanje takvog modela preduvjet adekvatne finansijske kontrole poslovanja, 
kao i temelj komunikacije prema vanjskim snabdjevačima kapitala.`},

  {
    title: "IZRADA POSLOVNIH PLANOVA",
    description: "Podrazumijeva razradu vaše poslovne ideje ili projekta uz navođenje i elaboriranje svih aspekata i pripadajućih proračuna. Elementi poslovnog plana temelj su za sve niže navedene studije i njihove izračune."
  },

  {
    title: "IZRADA STUDIJA ISPLATIVOSTI",
    description: `Najčešće služi za utvrđivanje finansijske atraktivnosti vašeg projekta i to kroz sučeljavanje i detaljnu razradu svih troškova i učinaka vezanih za isti. 
Najčešće služi vlasniku za donošenje odluke o pokretanju investicije ili za komunikaciju atraktivnosti projekta prema sudionicima projekta.`},

  {
    title: "IZRADA INVESTICIJSKIH STUDIJA",
    description: `Podrazumijeva razradu svi elemenata investicijskog projekta ili cjelokupnog poslovanja važnih za izračun ekonomske isplativosti ulaganja. 
Iako prvenstveno služi da vi kao poduzetnik kritički sagledate stabilnost i rentabilnost vašeg investicijskog projekta, a kako biste bili spremni izvršavati buduće kreditne obaveze, 
ona je neophodna kod pribavljanja vanjskih izvora finansiranja projekta, najčešće kredita banke.`},

  {
    title: "IZRADA STUDIJA IZVODLJIVOSTI",
    description: `Primarno se izrađuje za potrebe javnih natječaja ili poziva, odnosno za potrebe javnih tijela gdje se uz standardne elemente investicijske studije koriste i 
elementi efekata poslovne aktivnosti na širu društvenu zajednicu, a posebno na proračune lokalnih samoupravnih jedinica i države.`},

  {
    title: "IZRADA STUDIJA EKONOMSKE OPRAVDANOSTI",
    description: `Primarno se izrađuje za javna tijela u svrhu procjene opravdanosti davanja koncesije, a s ciljem utvrđivanja optimalne cijene koncesije ili za buduće 
koncesionare koji podnose prijave na javne pozive pri dodjeli koncesija ili koncesijskih odobrenja.`},

  {
    title: "IZRADA PLANOVA FINANSIJSKOG RESTRUKTURIRANJA",
    description: `Izrađujemo planove finansijskog restrukturiranja na temelju rezultata finansijske analize i utvrđenih poteškoća u pogledu likvidnosti ili solventnosti, 
gdje postojeću strukturu izvora vašeg poslovanja zamjenjujemo optimalnom u pogledu iznosa, cijene i ročnosti, a s ciljem postizanja optimalne i održive finansijske strukture.`},

  {
    title: "IZRADA PLANA I PROVEDBA OPTIMIZACIJE POSLOVANJA",
    description: "Poseban je aspekt finansijskog restrukturiranja koji se odnosi na operativna poboljšanja u poslovanju s ciljem postizanja optimalnih razina aktivnosti, profitabilnosti, likvidnosti i investiranja."
  },
];

export default function FinancialConsulting() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold mb-6 md:text-5xl">
          Finansijsko savjetovanje
        </TextEffect>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">Koje usluge nudimo?</h2>
          {services.map((item, index) => (
            <div key={index} className="my-8">
              <h4 className="text-lg font-semibold flex items-center gap-3 mb-4">
                <CircleCheckBig /> {item.title}
              </h4>
              <p className="text-md text-base/relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
