import Link from "next/link"
import Image from "next/image"

import logo from '@/assets/logo.png'
import classes from './main-header.module.css'

import MainHeaderBg from '@/components/main-header/main-header-bg';

export default function MainHeader() {
    return (
        <>
            <MainHeaderBg />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logo} alt="Image" preload />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
