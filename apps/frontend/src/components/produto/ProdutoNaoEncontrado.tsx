import { IconDevicesPcOff } from '@tabler/icons-react'
import Link from 'next/link'

export interface ProdutoNaoEncontradoProps {
    semBotaVoltar?: boolean
}

export default function ProdutoNaoEncontrado(props: ProdutoNaoEncontradoProps) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center text-red-500">
            <IconDevicesPcOff size={180} stroke={0.5} />
            <span className="text-gray-700 text-xl">Produto não encontrado</span>
            {!props.semBotaVoltar && (
                <Link href="/" className="button bg-red-500 text-white mt-5">
                    Voltar
                </Link>
            )}
        </div>
    )
}
