import { BsLinkedin } from 'react-icons/bs'
import LunchboxItemLink, {
    Props as SelfProps,
} from '../layouts/LunchboxItemLink'
import { Props as CellProps } from '../core/LunchboxItem'

import LunchboxIcon from '../core/LunchboxIcon'
import clsx from 'clsx'

type Props = Pick<SelfProps, 'className' | 'image'> &
    CellProps &
    Readonly<{
        title?: string
        subtitle?: string
        username: string
    }>

const icon = (
    <LunchboxIcon
        className="bg-[#1877F2] text-white"
        icon={(props) => <BsLinkedin {...props} />}
    />
)

export default function LunchboxItemLinkLinkedin({
    title = 'Linkedin',
    username,
    subtitle: subtitleProp,
    ...props
}: Props) {
    const subtitle = subtitleProp ?? username
    const action = (
        <a
            href={`https://linkedin.com/in/${username}`}
            target="_blank"
            rel="noreferrer"
            className={clsx(
                'inline-flex px-3 py-2 rounded-lg',
                'transition',
                'text-xs text-center font-semibold',
                'text-gray-900',
                'bg-[#e4e6eb] hover:bg-gray-300'
            )}
        >
            Follow
        </a>
    )

    return (
        <LunchboxItemLink
            icon={icon}
            title={title}
            subtitle={subtitle}
            action={action}
            {...props}
        />
    )
}
