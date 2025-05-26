import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { TextEffect } from "@/components/text-effect"
import { AnimatedGroup } from "@/components/animated-group"
import { Button } from "../ui/button"

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function Hero() {
    return (
        <>
            <main className="overflow-hidden">
                <div aria-hidden className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-36 md:pt-36 from-transparent from-75%">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20"
                        >
                            <img
                                src="./bg-hero.png"
                                alt="background"
                                className="absolute inset-x-0 -z-20  dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-4 text-balance text-4xl md:text-5xl lg:mt-4 xl:text-[5.25rem]"
                                >
                                    Poslovno i finansijsko savjetovanje
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-md"
                                >
                                    Naš tim experata za transakcijsko savjetovanje nudi prilagođena rješenja i savjete na frekvenciji vašeg poslovnog uspjeha.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-around gap-2 md:flex-row"
                                >
                                    <Button asChild size="lg" className="px-8" variant="ghost">
                                        <Link href="/contact">Kontaktirajte nas</Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>
                        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div
                                aria-hidden
                                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-15%"
                            />
                            <div className="inset-shadow-2xs hidden ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <img
                                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                    src="./bg-hero.png"
                                    alt="app screen"
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16">
                    <p className="text-center text-2xl">BPM ADVISORY JE STRATEŠKI PARTNER I NOSILAC FRANŠIZE</p>
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <a href="https://bsg-advisory.hr/" className="block text-sm duration-150 hover:opacity-75">
                                <span> Upoznajte naše partnere</span>
                                <ChevronRight className="ml-1 inline-block size-3" />
                            </a>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl transition-all duration-500 group-hover:opacity-50">
                            <img
                                className="mx-auto w-fit dark:invert"
                                src="./bsg-logo.png"
                                alt="bsg-advisory-logo"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
