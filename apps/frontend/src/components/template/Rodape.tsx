import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandWhatsapp,
} from '@tabler/icons-react'
import Logo from '../shared/Logo'

export default function Rodape() {
    return (
        <footer className="flex flex-col bg-red-500 mt-10 rounded-t-3xl">
            <div className="container flex flex-col py-10 gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <div className="flex flex-col">
                        <Logo />
                        <div className="flex gap-2 mt-4 justify-center sm:justify-start">
                        <a href='https://github.com/alexseixasv' target='_blank'><IconBrandGithub size={28} stroke={2} className='rounded-full text-red-500 bg-white p-1'/></a>
                        <a href='https://linkedin.com/in/alexseixasv' target='_blank'><IconBrandLinkedin size={28} stroke={2} className='rounded-full text-red-500 bg-white p-1'/></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-white">
                        <span className="text-2xl font-bold pb-2">Sobre</span>
                        <a target='_blank' href='https://alexseixas.com.br/portfolio.html'><span className="text-sm">Portfólio</span></a>
                        <a target='_blank' href='https://alexseixas.com.br/curriculum.html'><span className="text-sm">Experiências profissionais</span></a>
                        <a href='https://wa.me/5511983260317' target='_blank'><span className="text-sm">Fale comigo</span></a>
                    </div>
                    <div className="flex flex-col gap-1 text-white">
                        <span className="text-2xl font-bold pb-2">Contato</span>
                        <a href='mailto:alexseixasv@gmail.com'><span className="text-sm">alexseixasv@gmail.com</span></a>
                        <a href='https://wa.me/5511983260317' target='_blank'><div className=" text-sm flex items-center gap-2 justify-center md:justify-start">
                            <IconBrandWhatsapp size={20} className="text-green-500" />
                            <span>+55 11 98326-0317</span>
                        </div></a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-white">
                        <div className="flex gap-1.5">
                            <span>© Desenvolvido em {new Date().getFullYear()} por</span>
                            <a target='_blank' href='https://alexseixas.com.br'><span>Alex Seixas</span></a>
                        </div>
                        <span className="hidden md:inline-block">|</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
