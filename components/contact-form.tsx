"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { submitContactForm, type ContactFormData } from "@/app/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define the form schema with detailed validation rules
const formSchema = z.object({
  fullName: z
    .string()
    .min(4, {
      message: "Minimalno 4 karaktera",
    })
    .max(100, {
      message: "Maximalno 100 karaktera.",
    }),
  email: z
    .string()
    .email({
      message: "Molimo unesite validnu e-mail adresu.",
    })
    .max(100, {
      message: "Maximalno 100 karaktera.",
    }),
  message: z
    .string()
    .min(10, {
      message: "Minimalno 10 karaktera",
    })
    .max(100, {
      message: "Maximalno 100 karaktera.",
    }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitContactForm(values as ContactFormData)

      if (result.success) {
        setSubmitResult({
          success: true,
          message: result.message || "Poruka poslana uspješno!",
        })
        form.reset()
      } else {
        setSubmitResult({
          success: false,
          message: result.message || "Dogodila se greška prilikom slanja vaše poruke, molimo pokušajte ponovno.",
        })

        // If there are field-specific errors, update the form
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, errors]) => {
            if (errors && errors.length > 0) {
              form.setError(field as keyof z.infer<typeof formSchema>, {
                type: "server",
                message: errors[0],
              })
            }
          })
        }
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Dogodila se greška prilikom slanja vaše poruke, molimo pokušajte ponovno.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitResult?.success) {
    return (
      <div className="rounded-lg border bg-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-medium">
          Hvala što ste nam poslali poruku! <br />
          Odgovor na vaš upit će biti poslan na naznačenu e-mail adresu u najkraćem mogućem roku.
        </h3>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {submitResult && !submitResult.success && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{submitResult.message}</AlertDescription>
          </Alert>
        )}

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ime i prezime" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Vaša email adresa" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Kako vam možemo pomoći?" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Slanje u toku...
            </>
          ) : (
            "Pošalji"
          )}
        </Button>
      </form>
    </Form>
  )
}
