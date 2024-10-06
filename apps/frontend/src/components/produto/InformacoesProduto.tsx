import { Produto } from '@gstore/core'
import Image from 'next/image'
import Especificacoes from './Especificacoes'

export interface InformacoesProdutoProps {
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
    const { produto } = props
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 drop-shadow rounded-xl p-2 md:p-5">
            <div className="relative max-w-lg flex justify-center h-96">
                <Image
                    src={produto.imagem!}
                    fill
                    className="object-cover p-7"
                    alt="Imagem do Produto"
                />
            </div>
            <div className="flex justify-center">
                <Especificacoes produto={produto} />
            </div>
        </div>
    )
}
