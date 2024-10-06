import Logo from '../shared/Logo'
import IconeCarrinho from '../shared/IconeCarrinho'
import Link from 'next/link'

export default function Cabecalho() {
    return (
        <div
            className="flex flex-col h-20 bg-red-500 rounded-b-3xl"
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <div className="max-w-24 md:max-w-60"><Logo /></div>
                    <Link href="">
                        <IconeCarrinho qtdeItens={0} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
