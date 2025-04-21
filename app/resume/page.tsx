import Header from '@/app/components/Header'
import NavLinks from '@/app/components/NavLinks'
import LunchboxGrid from '@/app/lunchbox/core/LunchboxGrid'
import LunchboxIcon from '@/app/lunchbox/core/LunchboxIcon'
import LunchboxItemJobPosition from '@/app/lunchbox/layouts/LunchboxItemJobPosition'
import Link from 'next/link'
import { FaUpwork } from 'react-icons/fa6'

function ResumePage() {
    const icon = (
        <LunchboxIcon
            className="text-[#6FDA44] shadow"
            icon={(props) => <FaUpwork {...props} />}
        />
    )

    return (
        <div>
            <Header rightContents={<NavLinks />} />
            <div className="flex flex-col gap-y-12">
                <section className="grid gap-y-4">
                    <h2 className="sr-only tracking-tight font-bold text-xl">
                        About
                    </h2>
                    <p className="text-zinc-600 col-span-3">
                        Full-Stack Developer (Python / Next.js). Skilled in
                        Python (Django), JavaScript (TypeScript), Git, SQL
                        (Postgres, MySQL), NoSQL (Redis, MongoDB), Linux,
                        Docker, Cloud platforms (DigitalOcean, AWS), and
                        frontend frameworks (Next.js).
                    </p>
                </section>
                <section className="grid gap-y-4">
                    <h2 className="tracking-tight font-bold text-xl">
                        Experience
                    </h2>
                    <LunchboxGrid>
                        <LunchboxItemJobPosition
                            icon={icon}
                            company="Digiway"
                            description={
                                <ul className="list-disc">
                                    <li>Frontend development</li>
                                    <li>
                                        Helping businesses earn through
                                        high-converting websites
                                    </li>
                                </ul>
                            }
                            jobTitle="Frontend Developer"
                            start={'Aug 2024'}
                            end={'Now'}
                            rows={2}
                            cols={4}
                        />
                        <LunchboxItemJobPosition
                            icon={icon}
                            company="EasyLife"
                            description={
                                <ul className="list-disc">
                                    <li>
                                        Worked on platform for foreigners in
                                        Turkey
                                    </li>
                                    <li>
                                        Maintained component consistency,
                                        performance, and cross-browser
                                        compatibility
                                    </li>
                                </ul>
                            }
                            jobTitle="Frontend Developer"
                            start={'Jan 2023'}
                            end={'Jul 2024'}
                            rows={2}
                            cols={4}
                        />
                    </LunchboxGrid>
                </section>
                <section className="grid gap-y-4">
                    <h2 className="tracking-tight font-bold text-xl">
                        Projects
                    </h2>
                    <div>
                        <ul className="list-disc pl-4">
                            {[
                                {
                                    year: 2025,
                                    title: 'findspecialist.app',
                                    href: 'https://findspecialist.app',
                                    description: (
                                        <>
                                            Full-stack application for ordering
                                            personal services in Warsaw
                                        </>
                                    ),
                                },
                                {
                                    year: 2025,
                                    title: 'store-front',
                                    href: 'https://github.com/Nurmukhamed7/store-front',
                                    description: (
                                        <>
                                            Django-based backend for a RESTful
                                            API project
                                        </>
                                    ),
                                },
                                {
                                    year: 2024,
                                    title: 'smart-search',
                                    href: 'https://github.com/Nurmukhamed7/smart-search',
                                    description: (
                                        <>
                                            Smart search feature in Next.js,
                                            optimizing search performance with
                                            server-side API requests
                                        </>
                                    ),
                                },
                                {
                                    year: 2024,
                                    title: 'path-finder',
                                    href: 'https://github.com/Nurmukhamed7/path-finder',
                                    description: (
                                        <>
                                            Dijkstra's algorithm path-finder
                                            using Python and the module Pygame
                                        </>
                                    ),
                                },
                                {
                                    year: 2024,
                                    title: 'agro-web',
                                    href: 'https://github.com/Nurmukhamed7/agro-web',
                                    description: (
                                        <>
                                            Vue.js-based frontend for agro
                                            e-commerce platform using Pinia,
                                            Tailwind
                                        </>
                                    ),
                                },
                                {
                                    year: 2024,
                                    title: 'ozenfitness.kz',
                                    href: 'https://ozenfitness.kz',
                                    description: (
                                        <>
                                            Landing page for a premium fitness
                                            club in Kazakhstan
                                        </>
                                    ),
                                },
                                {
                                    year: 2024,
                                    title: 'ozenacademy.kz',
                                    href: 'https://ozenacademy.kz',
                                    description: (
                                        <>
                                            Landing page for the Water Sports
                                            Academy in Kazakhstan
                                        </>
                                    ),
                                },
                                {
                                    year: 2024,
                                    title: 'chess-game',
                                    href: 'https://github.com/Nurmukhamed7/chess',
                                    description: <>React-based Chess Game</>,
                                },
                                {
                                    year: 2023,
                                    title: 'landing website for smart home',
                                    href: 'https://nur-home-smart.netlify.app/',
                                    description: (
                                        <>Vanilla Javascript website</>
                                    ),
                                },
                                {
                                    year: 2023,
                                    title: 'landing website for online education',
                                    href: 'https://nurmukhamed-youdemi.netlify.app/',
                                    description: (
                                        <>Vanilla Javascript website</>
                                    ),
                                },
                                {
                                    year: 2023,
                                    title: 'vanilla JavaScript bank app',
                                    href: 'https://github.com/Nurmukhamed7/bank-app',
                                    description: (
                                        <>
                                            Application built without external
                                            libraries or frameworks.
                                        </>
                                    ),
                                },
                            ].map(({ year, title, href, description }) => (
                                <li key={href}>
                                    <span className="text-zinc-400">
                                        {year}
                                    </span>{' '}
                                    —{' '}
                                    <Link
                                        className="text-zinc-500 hover:underline hover:text-zinc-600 font-medium"
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {title}
                                    </Link>
                                    :{' '}
                                    <span className="text-zinc-500">
                                        {description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="grid gap-y-4">
                    <h2 className="tracking-tight font-bold text-xl">Awards</h2>
                    <div>
                        <ul className="list-disc pl-4">
                            {[
                                {
                                    year: 2024,
                                    title: (
                                        <>
                                            HackWarsaw, 3rd Place For Social
                                            Responsibility Track
                                        </>
                                    ),
                                },
                            ].map(({ year, title }) => (
                                <li key={year}>
                                    <span className="text-zinc-400">
                                        {year}
                                    </span>{' '}
                                    —{' '}
                                    <span className="text-zinc-600">
                                        {title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ResumePage
