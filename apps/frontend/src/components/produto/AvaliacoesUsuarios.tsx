import { Produto } from '@gstore/core'
import NotaReview from '../shared/NotaReview'

export interface AvaliacoesUsuariosProps {
    produto: Produto
}

export default function AvaliacoesUsuarios(props: AvaliacoesUsuariosProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-lg sm:text-2xl font-bold text-gray-700">Avaliações dos Usuários</span>
            </div>
            <p className="font-light text-gray-500 text-justify">
                O produto é elogiado por seu desempenho, qualidade de som e praticidade. Os clientes
                destacam o bom custo-benefício, a qualidade do microfone embutido e a facilidade de
                instalação. Alguns mencionam que o produto é ideal para jogos e que o desempenho é
                excelente, mesmo sem placa de vídeo dedicada. Outros destacam a qualidade do som e o
                conforto do fone de ouvido.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-5">
                <div className="flex flex-col gap-2 items-center">
                    <div className="text-7xl text-red-500">{props.produto.nota}</div>
                    <NotaReview nota={props.produto.nota} tamanho={18} />
                    <div className="font-light text-sm text-gray-500">(198 Comentários)</div>
                </div>
                <div className="flex-1 flex items-center bg-gray-200 drop-shadow-md h-32 rounded-xl">
                    <ul className="flex flex-col list-disc m-10 gap-1 text-gray-700 text-xs md:text-base">
                        <li>Desempenho excelente.</li>
                        <li>Custo benefício ótimo.</li>
                        <li>Gráfico dedicado.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
