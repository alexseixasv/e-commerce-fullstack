import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

export interface PaginaProps {
    className?: string
    children: any
    semCabecalho?: boolean
    semRodape?: boolean
    semContainer?: boolean
    semPadding?: boolean
}

export default function Pagina(props: PaginaProps) {
    return (
        <div
            className="flex flex-col min-h-screen bg-white"
        >
            <div
                className="flex-1 flex flex-col"
            >
                {props.semCabecalho ? null : <Cabecalho />}
                <main
                    className={`
                        flex-1 flex flex-col ${props.className ?? ''}
                        ${props.semContainer ? '' : 'container'}
                        ${props.semPadding ? '' : 'py-10'}
                    `}
                >
                    {props.children}
                </main>
                {props.semRodape ? null : <Rodape />}
            </div>
        </div>
    )
}
