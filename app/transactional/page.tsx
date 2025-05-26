import { TextEffect } from "@/components/text-effect"
import { CircleCheckBig } from "lucide-react";

const services = [
    { 
        title: "SAVJETOVANJE PRI PRODAJI KOMPANIJE (SELL-SIDE ADVISORY)",
        content: `Prodaja poslovanja izuzetno je kompleksan i za vlasnike najstresniji dio poduzetničkog ciklusa s kojim se mnogi rijetko ili nikada ne susretnu. 
        S obzirom na iskustvo, svojim znanjem kroz ovaj složen i dugotrajan proces nastupamo u ulozi vodiča – štiteći vaše interese i maksimizirajući vaše koristi. 
        Naš tim stručnjaka vas odgovorno prati kroz cijeli postupak prodaje – od same pripreme transakcijskog procesa, pripreme pravila i modela prodaje, analize poslovanja i izrade informacijskih materijala za prodaju – 
        teasera i informacijskog memoranduma, organiziranje sobe sa podacima, valuacije poslovanja, pronalaska kupca/investitora, pa sve do postupka  pregovora i uspješnog zaključenja transakcije.`
    },
    { 
        title: "SAVJETOVANJE PRI KUPNJI KOMPANIJE (BUY-SIDE ADVISORY)",
        content: `Kupovina kompanije složeniji je proces od prodaje, jer podrazumjeva dodatne rizike povezane s nepoznavanjem ciljne kompanije, što značajno otežava mogućnost mjerenja koristi kupnje. 
Naš tim u ulozi vodiča i savjetnika pomoći će vam pri pronalasku i procjeni idealne mete preuzimanja, utvrđivanju i kvantifikaciji eventualnih sinergija, pripremi potrebne dokumentacije – od izrade pisma namjere do dokumenta s ključnim elementima transakcije (term sheet).
Također, sudjelujemo u pregovorima s prodavcem kako bismo usaglasili uslove kupovine, provodimo dubinsko snimanje unutar finansijske i poreske sfere te učestvujemo u zaključenju same transakcije. 
Spremno pratimo dinamiku vašeg poslovanja s ciljem da vam pomognemo u provedbi složenijih strateških odluka kao što je kupovina kompanije – minimizirajući potencijalne rizike, a istovremeno čineći proces akvizicije ili spajanja s ciljnim društvom jednostavnijim i sigurnijim za vas.
Kao pouzdan poznavalac lokalnih prilika i poslovni posrednik, pomažemo vam pri pronalasku adekvatnih meta preuzimanja koje odgovaraju vašem investicijskom profilu i potrebama. U slučaju već poznate mete pomažemo vam pri realizaciji same transakcije.`
    }
];
const otherServices = [
    { 
        title: "USLUGE PROCJENE VRIJEDNOSTI",
        content: "Omogućavamo vam da saznate stvarnu vrijednost kompanije koju prodajete ili kompanije koju planirate kupiti, kako biste donijeli optimalne poslovne odluke."
    },
    {
        title: "USLUGE FINANSIJSKOG DUBINSKOG SNIMANJA (FINANSIJSKI DUE DILIGENCE)",
        content: "Omogućujemo vam sticanje boljeg uvida u finansijske aspekte poslovanja ciljanog društva, kako biste na vrijeme spoznali potencijalne rizike, otkrili skrivene prilike ili čak kvantificirali moguće sinergije."
    },
    { 
        title: "USLUGE SAVJETOVANJA PRI OSIGURANJU EFEKTIVNOG PRIJENOSA PORODIČNOG POSLOVANJA NA NASLJEDNIKE",
        content: "Pomažemo vam da blagovremeno i na pravi način pripremite kompaniju za prijenos na mlađi naraštaj, bez frikcija u poslovanju."
    },
    {
        title: "USLUGE PROVOĐENJA STATUSNIH PROMJENA POPUT PODJELA, PRIPAJANJA I ODVAJANJA",
        content: "Pomažemo vam realizirati poslovne ideje i vlasničke transformacije vodeći vas kroz postupke različitih poslovnih kombinacija."
    },
    {
        title: "USLUGE POSTAKVIZICIJSKE INTEGRACIJE",
        content: "Vodimo vas kroz posebno izazovan postupak integracije novo-akviziranog ili novo-pripojenog poslovanja sa postojećim."
    }
];

export default function TransactionalConsulting() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold mb-6 md:text-5xl">
          Transakcijsko savjetovanje (M&A)
        </TextEffect>
        <div className="prose dark:prose-invert max-w-4xl">
          <h2 className="text-2xl font-bold mt-8 mb-4">Koje usluge nudimo?</h2>
          <h3 className="text-xl font-bold mt-8 mb-4">I) POSREDOVANJE PRI KUPOVINI I PRODAJI KOMPANIJE</h3>
          <p className="text-md text-base/relaxed">
            Prodaja ili kupovina kompanije, manjinskog udjela, divizije poslovanja ili samo imovine kroz akviziciju (preuzimanje) ili spajanje, spadaju u  najzahtjevnije strateške odluke pred kojima se možete naći kao vlasnik ili odgovorna osoba.
            Bilo da ste prodavac ili kupac, pred vama je složen i strukturiran proces kroz koji vas naš BPM Advisory tim zna i može voditi od početka do zaključenja transakcije.
            Neovisno radili se o mladoj, brzo rastućoj (start-up), zreloj kompaniji, malom ili srednje velikoj (SME), dioničkom društvu ili privatnoj kompaniji, spremni smo vam pomoći i za vas proces kupoprodaje učiniti bržim, i jeftinijim te u konačnici uspješnijim.",
          </p>
          {services.map((item, index) => (
            <div key={index} className="my-8">
              <h4 className="text-lg font-semibold flex items-center gap-3 mb-4">
                <CircleCheckBig /> {item.title}
              </h4>
              <p className="text-md text-base/relaxed">{item.content}</p>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-8 mb-4">II) OSTALE TRANSAKCIJSKE USLUGE</h3>
          {otherServices.map((item, index) => (
            <div key={index} className="my-8">
              <h4 className="text-lg text-balance font-semibold flex items-center gap-3 mb-4">
                <CircleCheckBig /> {item.title}
                
              </h4><span className="text-base/relaxed">{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
