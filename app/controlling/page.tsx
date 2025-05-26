import { TextEffect } from "@/components/text-effect";
import { CircleCheckBig } from "lucide-react";

const services = [
  {
    title: "STRATEŠKO SAVJETOVANJE",
    content: `Fokusirani smo na izgradnju dugoročnih odnosa s našim klijentima, s ciljem realizacije vaših ambicija rasta i 
        stvaranja vrijednosti. Imamo veliko iskustvo koje se odnosi na investicijsko bankarstvo, menadžersko savjetovanje, 
        izradu stručnih analiza i studija, što nas stavlja u dobru poziciju za pružanje objektivnih strateških 
        savjeta vašem nadzornom odboru, upravi i vama, kao vlasnicima kompanije, u vezi sa širokim spektrom poslovnih pitanja.`
  },
  {
    title: "OSIGURANJE VLASNIČKOG KAPITALA",
    content: `Bilo da ste u ranoj fazi razvoja (start-up) i trebate rizični kapital ili kao zrela kompanija imate potrebu za razvojnim kapitalom, 
        odnosno trebate svježi kapital kao dio finansijskog restrukturiranja uslijed poteškoća u poslovanju – spremni smo vam pomoći u procesu osiguravanja potrebnih finansijskih sredstava. 
        Članstvo našeg strateškog partnera BSG Advisory u Cross Border Associations i Corporate Finance in Europe udruženjima omogućuje nam pristup širokoj mreži 
        digitalnih platformi za razmjenu investicijskih prilika, kontaktima u fondovskoj industriji i investicijskom bankarstvu, kao i direktnim vezama s imućnim pojedincima. 
        Zahvaljujući tome, možemo vam pomoći da proširite vlastiti doseg i povećate šanse za uspješno osiguranje kapitala, 
        uz profesionalnu podršku i sigurnost u ostvarivanju najpovoljnijih uslova finansiranja.`
  },
  {
    title: "OSIGURANJE DUGOVNOG KAPITALA – KREDITNE APLIKACIJE",
    content: `Ako pokrećete novi poslovni projekat, širite postojeće kapacitete ili prolazite kroz proces finansijskog restrukturiranja, 
        a potrebni su vam vanjski kreditni izvori finansiranja, možemo vam pomoći u kontaktu s bankama, 
        odabiru najpovoljnijih kreditnih uslova te kompletnom procesu podnošenja kreditne aplikacije. Naša prednost leži u izgrađenim odnosima s bankama na domaćem tržištu i 
        dubokom razumijevanju bankarskih rizika, što dodatno povećava šanse za uspješnu aplikaciju i kvalitetnu prezentaciju vaših finansijskih potreba.`
  },
  {
    title: "OSIGURANJE SREDSTAVA IZ DRŽAVNIH I EU FONDOVA",
    content: `Ako vam je potreban razvojni kapital za projekat koji ispunjava uslove određenih javnih državnih ili EU fondova, 
        možemo vam pomoći u osiguravanju bespovratnih sredstava (grantova), kroz pisanje projektnog prijedloga, popunjavanje dokumentacije i 
        vođenje cjelokupnog postupka prijave na konkurs. Imamo značajno iskustvo u povlačenju sredstava unutar privatnog i javnog sektora, 
        posebno u oblastima nauke, inovacija, prerađivačke industrije i poljoprivrede. Kod ovakvih usluga orijentirani smo na zahtjevnije i veće projekte.`
  },
  {
    title: "PROVOĐENJE STATUSNIH PROMJENA",
    content: `Restrukturiranje, optimizacija ili širenje poslovanja mogu stvoriti potrebu za provođenjem statusnih promjena poput spajanja, 
        pripajanja, podjele, preoblikovanja ili prijenosa privredne cjeline. Iskustvo naših stručnjaka u provođenju ovih procesa u skladu sa zakonskim 
        propisima može vam biti od velike pomoći, posebno u fazi razmatranja optimalne statusne promjene, kao i pri odabiru najboljeg i 
        poreski najpovoljnijeg načina njene realizacije.`
  },
  {
    title: "RAČUNOVODSTVENE I KNJIGOVODSTVENE USLUGE",
    content: `Računovodstvene i knjigovodstvene usluge pružamo putem povezanog društva Accounting d.o.o., 
        specijaliziranog za vođenje poslovnih knjiga, računovodstvenu obradu i porezno savjetovanje za firme različitih djelatnosti.
        Accounting d.o.o. preuzima potpunu brigu o poslovnoj dokumentaciji, poreznoj usklađenosti i računovodstvenoj evidenciji, 
        uključujući i vođenje knjiga za inozemne vlasnike. Također, kroz Accounting d.o.o. klijentima su dostupne i 
        dodatne administrativne usluge kao što su: usluga sjedišta društva, plaćanje računa i druge usluge podrške poslovanju.`
  },
  {
    title: "RAZVOJ I REALIZACIJA INVESTICIJSKIH PROJEKATA",
    content: `Ključan kreativni dio naše djelatnosti jest razvoj investicijskih projekata i to često van standardnog investicijskog obrasca i 
        forme kakvu prati fondovska industrija. Tom prilikom koristimo vlastita finansijska i investicijska znanja, vlastitu mrežu poznanstava i suradnika, 
        oslanjajući se na odlično poznavanje lokalnog tržišta i lokalnih prilika, kao i kontinuirano praćenje globalnih makro trendova, 
        a s ciljem kreiranja jedinstvenih projekata atraktivnih za ulaganje, kako od strane domaćih tako i od strane inozemnih investitora različitih ulagačkih profila.`
  }
];

const otherServices = [
  { title: "Uspostava kontroling funkcije" },
  { title: "Unapređenje postojećeg sistema kontrolinga" },
  { title: "Izrada menadžerskih izvještaja" },
  { title: "Eksterna kontrola poslovanja" }
];

export default function ControllingServices() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold mb-6 md:text-5xl">
          Kontroling i druge usluge
        </TextEffect>
        <div className="prose dark:prose-invert max-w-4xl">
          <h2 className="text-2xl font-bold mt-8 mb-4">Koje usluge nudimo?</h2>
          {services.map((item, index) => (
            <div key={index} className="my-8">
              <h4 className="text-lg font-semibold flex items-center gap-3 mb-4">
                <CircleCheckBig /> {item.title}
              </h4>
              <p className="text-md text-base/relaxed">{item.content}</p>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-8 mb-4">OSTALE USLUGE U OKVIRU KONTROLINGA</h3>
          {otherServices.map((item, index) => (
            <div key={index} className="my-8">
              <h4 className="text-lg text-balance font-semibold flex items-center gap-3 mb-4">
                <CircleCheckBig /> {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
