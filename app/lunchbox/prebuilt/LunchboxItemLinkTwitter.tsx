import { TbBrandLeetcode } from 'react-icons/tb'

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
        className="bg-black text-white"
        icon={(props) => <TbBrandLeetcode {...props} />}
    />
)

export default function LunchboxItemLinkTwitter({
    title = 'Leetcode',
    username,
    subtitle: subtitleProp,
    ...props
}: Props) {
    const subtitle = subtitleProp ?? `@${username}`
    const action = (
        <a
            href={`https://leetcode.com/u/${username}`}
            target="_blank"
            rel="noreferrer"
            className={clsx(
                'inline-flex px-3 py-1.5 rounded-full',
                'transition',
                'text-xs text-center font-semibold',
                'text-white',
                'shadow-sm',
                'bg-[#0f1419] hover:bg-[#272c30]'
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
