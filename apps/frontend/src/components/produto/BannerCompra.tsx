import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { Moeda, Produto } from '@gstore/core'
import useParcelamento from '@/data/hooks/useParcelamento'

export interface BannerCompraProps {
    produto: Produto
}

export default function BannerCompra(props: BannerCompraProps) {
    const { produto } = props
    const parcelamento = useParcelamento(produto.precoPromocional)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col border-r border-white sm:border-zinc-500 pr-0 sm:pr-5">
                <div className="line-through text-gray-500 text-center md:text-start">de R$ {produto?.precoBase}</div>
                <div className="text-2xl font-semibold text-center md:text-start">
                    <span className="text-base text-gray-500">por</span>{' '}
                    <span className="text-gray-700">R$ {produto?.precoPromocional}</span>{' '}
                    <span className="text-base text-gray-500">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-gray-700 pl-0 md:pl-5 text-center md:text-start">
                <span className="text-base text-gray-500">ou {parcelamento.qtdeParcelas}x de</span>
                {Moeda.formatar(parcelamento.valorParcela)}{' '}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 sm:mt-0">
                <button className="flex-1 button bg-transparent border border-red-500 text-red-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" onClick={() => {}}>
                    <IconShoppingCart size={20} />
                    <span>Adicionar</span>
                </button>
                <button className="flex-1 button bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-white" onClick={() => {}}>
                    <IconCreditCard size={20} />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    )
}
