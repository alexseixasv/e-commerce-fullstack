import { Produto } from '@gstore/core'
import { IconChevronDown, IconMoodConfuzed, IconMoodHappy, IconMoodSad } from '@tabler/icons-react'

export interface MedidorDePrecoProps {
    produto: Produto
}

export default function MedidorDePreco(props: MedidorDePrecoProps) {
    const {
        menorPreco: minimo,
        maiorPreco: maximo,
        precoPromocional: atual,
        precoMedio: media,
    } = props.produto

    // TODO: Mover calculo para o @gstore/core
    let percentual
    if (atual > media) {
        percentual = ((atual - media) / (maximo - media)) * 50 + 50
    } else {
        percentual = (1 - (media - atual) / (media - minimo)) * 50
    }

    return (
        <div className="flex flex-col p-3 sm:p-7 rounded-xl gap-4 bg-red-500">
            <div className="grid grid-cols-12 items-center gap-2">
                <div className="col-span-2 sm:col-span-1">
                    {percentual >= 40 && percentual < 60 ? (
                        <IconMoodConfuzed size={40} stroke={1.5} className="text-white" />
                    ) : percentual >= 60 ? (
                        <IconMoodSad size={40} stroke={1.5} className="text-white" />
                    ) : (
                        <IconMoodHappy size={40} stroke={1.5} className="text-white" />
                    )}
                </div>
                <div className="col-span-10 sm:col-span-11 -ml-0 lg:-ml-8 leading-tight">
                        <span className="text-white text-sm mr-1 sm:mr-0">
                            O preço do produto está
                        </span>
                        <span className="mr-1 sm:mr-0 text-sm">
                            {percentual >= 40 && percentual < 60 ? (
                                <span className="text-white">na média</span>
                            ) : percentual >= 60 ? (
                                <span className="text-white">acima da média</span>
                            ) : (
                                <span className="text-white">abaixo da média</span>
                            )}
                        </span>
                        <span className="text-white text-sm">
                            com base no preço dos <span className="text-white font-bold">últimos 30 dias</span>
                        </span>
                </div>
            </div>

            <div
                className="
                    flex items-center h-2 bg-gradient-to-r 
                    from-green-500 via-yellow-400 to-red-500
                    rounded-full relative border-[1px] drop-shadow-md border-white
                "
            >
                <div
                    className="absolute flex justify-center items-center h-4 w-4 bg-white rounded-full"
                    style={{
                        left: `${percentual}%`,
                    }}
                >
                    <IconChevronDown size={20} className="absolute text-white -mt-8" />
                    <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
