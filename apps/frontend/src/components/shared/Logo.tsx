import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" height={60} width={120} alt="logo" />
            {/* <Image src="/logo-texto.png" width={230} height={0} alt="logo" /> */}
        </Link>
    )
}
