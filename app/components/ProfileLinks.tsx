import { BsGithub, BsLinkedin } from 'react-icons/bs'

const internetProfiles = {
    github: {
        label: 'GitHub',
        icon: BsGithub,
        href: 'https://github.com/Nurmukhamed7',
    },
    linkedin: {
        label: 'LinkedIn',
        icon: BsLinkedin,
        href: 'https://linkedin.com/in/nurmukhamed-berikbolov',
    },
}

export default function ProfileLinks() {
    return (
        <div className="text-sm flex flex-wrap gap-x-4">
            {Object.values(internetProfiles).map(
                ({ label, icon: Icon, href }) => (
                    <a
                        aria-label={label}
                        className="text-zinc-400 hover:text-zinc-500 transition-colors"
                        href={href}
                        key={href}
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <Icon className="h-5 w-5 " />
                    </a>
                )
            )}
        </div>
    )
}
