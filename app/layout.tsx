import type React from "react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import { CallToAction } from "@/components/shared/cta"

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange>
          <Header />
          <div className="min-h-screen pt-20">{children}</div>
          <CallToAction />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
