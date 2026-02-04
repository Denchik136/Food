'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

import classes from './nav-link.module.scss'


export default function NavLink({ link, children }) {
    const path = usePathname()
    return (
        <li>
            <Link href={link} className={path.startsWith(link) ? classes.active : null}>{children}</Link>
        </li>
    )
}
