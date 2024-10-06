'use client'
import ProdutoItem from '@/components/produto/ProdutoItem'
import useProdutos from '@/data/hooks/useProdutos'

export default function Inicio() {
    const { produtos } = useProdutos()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {produtos.map((produto) => (
                <ProdutoItem key={produto.id} produto={produto} />
            ))}
        </div>
    )
}
