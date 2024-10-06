import { IconShoppingCart } from '@tabler/icons-react'

export interface IconeCarrinhoProps {
    qtdeItens: number
}

export default function IconeCarrinho(props: IconeCarrinhoProps) {
    return (
        <div className="flex justify-center text-red-500 items-center rounded-full w-14 h-14 bg-white relative">
            <IconShoppingCart size={30} stroke={1.3} />
            <div
                className="
                    flex items-center justify-center
                    absolute top-2 right-2 w-4 h-4 
                    bg-red-500 text-white 
                    text-xs font-semibold rounded-full 
                "
            >
                {props.qtdeItens ?? 0}
            </div>
        </div>
    )
}
