export interface TagProps {
    label: string
    icone: React.ElementType
    outlined?: boolean
}

export default function Tag(props: TagProps) {
    return (
        <div
            className={`
                flex items-center gap-2 self-start py-1 px-4
                rounded-full text-xs uppercase bg-red-500 text-white
            `}
        >
            <props.icone size={15} />
            <span>{props.label}</span>
        </div>
    )
}
