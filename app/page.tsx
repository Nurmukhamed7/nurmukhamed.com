import Header from '@/app/components/Header'
import NavLinks from '@/app/components/NavLinks'
import LunchboxGrid from '@/app/lunchbox/core/LunchboxGrid'
import LunchboxItemLinkGitHub from '@/app/lunchbox/prebuilt/LunchboxItemLinkGitHub'
import LunchboxItemLinkInstagram from '@/app/lunchbox/prebuilt/LunchboxItemLinkInstagram'
import LunchboxItemLinkLinkedin from '@/app/lunchbox/prebuilt/LunchboxItemLinkLinkedin'
import LunchboxItemLinkTelegram from './lunchbox/prebuilt/LunchboxItemLinkTelegram'

export default function HomePage() {
    return (
        <div className="flex flex-col gap-y-12">
            <Header rightContents={<NavLinks />} />
            <section className="grid gap-y-6">
                <h2 className="sr-only tracking-tight font-bold text-4xl">
                    About
                </h2>
                <p className="text-zinc-600 col-span-3">
                    Full-Stack Developer (Python / Next.js). Skilled in Python
                    (Django), JavaScript (TypeScript), Git, SQL (Postgres,
                    MySQL), NoSQL (Redis, MongoDB), Linux, Docker, Cloud
                    platforms (DigitalOcean, AWS), and frontend frameworks
                    (Next.js).
                </p>
            </section>
            <section className="grid gap-y-6">
                <h2 className="tracking-tight font-bold text-xl">
                    Find Me Online
                </h2>
                <LunchboxGrid>
                    <LunchboxItemLinkGitHub
                        rows={1}
                        cols={4}
                        username="Nurmukhamed7"
                    />
                    <LunchboxItemLinkLinkedin
                        rows={2}
                        cols={2}
                        username="nurmukhamed-berikbolov"
                    />
                    <LunchboxItemLinkInstagram
                        rows={2}
                        cols={2}
                        username="nurmukhamed.bkv"
                    />
                    <LunchboxItemLinkTelegram
                        rows={1}
                        cols={4}
                        username="nurikdev26"
                    />
                </LunchboxGrid>
            </section>
        </div>
    )
}
