import { Produto } from '@gstore/core'

export interface TituloProdutoProps {
    produto: Produto
}

export default function TituloProduto(props: TituloProdutoProps) {
    const { produto } = props
    return (
        <div className="flex flex-col">
            <div className="text-2xl text-gray-700">{produto?.nome}</div>
            <div className="font-light text-gray-500">{produto?.descricao}</div>
        </div>
    )
}
