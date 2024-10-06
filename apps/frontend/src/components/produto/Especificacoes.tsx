import { IconTag } from '@tabler/icons-react'
import { Produto } from '@gstore/core'
import Tag from '../shared/Tag'

export interface EspecificacoesProps {
    produto: Produto
}

export default function Especificacoes(props: EspecificacoesProps) {
    const { produto } = props
    return (
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex mb-3 mt-3 md:mt-8">
                <Tag label={produto.especificacoes.destaque!} icone={IconTag} outlined />
            </div>
            {produto.especificacoes &&
                Object.keys(produto.especificacoes)
                    .filter((k) => k !== 'destaque')
                    .map((chave) => (
                        <div key={chave} className="grid grid-cols-2 gap-1">
                            <span className="p-2 text-gray-700 rounded-lg text-xs sm:text-base font-bold border border-gray-500">{chave}</span>
                            <span className="p-2 text-gray-500 rounded-lg text-xs sm:text-base border border-gray-500">
                                {produto.especificacoes[chave]}
                            </span>
                        </div>
                    ))}
        </div>
    )
}
