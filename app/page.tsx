import Header from '@/app/components/Header'
import NavLinks from '@/app/components/NavLinks'
import LunchboxGrid from '@/app/lunchbox/core/LunchboxGrid'
import LunchboxItemLinkGitHub from '@/app/lunchbox/prebuilt/LunchboxItemLinkGitHub'
import LunchboxItemLinkLinkedin from '@/app/lunchbox/prebuilt/LunchboxItemLinkLinkedin'
import LunchboxItemLinkTwitter from '@/app/lunchbox/prebuilt/LunchboxItemLinkTwitter'
import LunchboxItemLinkInstagram from '@/app/lunchbox/prebuilt/LunchboxItemLinkInstagram'

export default function HomePage() {
    return (
        <div className="flex flex-col gap-y-12">
            <Header rightContents={<NavLinks />} />
            <section className="grid gap-y-6">
                <h2 className="sr-only tracking-tight font-bold text-4xl">
                    About
                </h2>
                <p className="text-zinc-600 col-span-3">
                    Interested in full-stack development with commercial
                    experience in frontend and backend. Enhancing my knowledge
                    of Data Structures and Algorithms by solving LeetCode
                    problems. Holder of a Temporary Residence Permit (Karta
                    Pobytu) with work authorization in Poland until 2027.
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
                    <LunchboxItemLinkTwitter
                        rows={1}
                        cols={4}
                        username="Nurmukhamed7"
                    />
                </LunchboxGrid>
            </section>
        </div>
    )
}
