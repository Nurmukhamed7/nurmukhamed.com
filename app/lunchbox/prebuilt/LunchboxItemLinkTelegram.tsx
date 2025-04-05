import { BsTelegram } from 'react-icons/bs'
import { Props as CellProps } from '../core/LunchboxItem'
import LunchboxItemLink, {
    Props as SelfProps,
} from '../layouts/LunchboxItemLink'

import clsx from 'clsx'
import LunchboxIcon from '../core/LunchboxIcon'

type Props = Pick<SelfProps, 'className' | 'image'> &
    CellProps &
    Readonly<{
        title?: string
        subtitle?: string
        username: string
    }>

const icon = (
    <LunchboxIcon
        className="bg-[#24A1DE] text-white"
        icon={(props) => <BsTelegram {...props} />}
    />
)

export default function LunchboxItemLinkTelegram({
    title = 'Telegram',
    username,
    subtitle: subtitleProp,
    ...props
}: Props) {
    const subtitle = subtitleProp ?? username
    const action = (
        <a
            href={`https://t.me/${username}`}
            target="_blank"
            rel="noreferrer"
            className={clsx(
                'inline-flex px-3 py-1.5 rounded-lg',
                'text-xs text-center font-semibold',
                'transition',
                'text-[#24292f]',
                'text-xs text-center font-bold text-white active:text-white/80',
                'shadow-sm',
                'bg-[#4093EF] hover:bg-[#2875CA] active:bg-[#3383DC]'
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
