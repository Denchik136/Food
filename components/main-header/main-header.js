import Link from "next/link"
import Image from "next/image"

import logo from '@/assets/logo.png'
import classes from './main-header.module.scss'

import MainHeaderBg from '@/components/main-header/main-header-bg';
import NavLink from "./nav-link";

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
                        <NavLink link='/meals'>Browse Meals</NavLink>
                        <NavLink link='/community'>Foodies Community</NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}
