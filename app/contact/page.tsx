import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Radno vrijeme:</h3>
              <address className="text-muted-foreground not-italic text-start">
                Ponedjeljak-Petak 
                <br />
                08:00 - 17:00
                <br />
              </address>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
