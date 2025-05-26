import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      {/* Call to Action Section */}
      <div className="w-full bg-muted py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Call to Action</h2>
            <p className="text-muted-foreground">
              Ready to transform your business? Let our expert consultants help you achieve your goals.
            </p>
          </div>
          <Button asChild size="lg" className="px-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Logo />
              </Link>
              <p className="text-muted-foreground max-w-xs text-sm">
                Modern solutions for customer engagement. Build better experiences with our customizable components.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-foreground hover:text-muted-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Brand
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    DPA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Dusk Kit. All rights reserved.
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex max-w-sm flex-1 gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-60" />
                <Button type="submit">Subscribe</Button>
              </div>
              <div className="text-muted-foreground text-xs">
                By subscribing, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
