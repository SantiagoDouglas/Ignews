import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SignInButton'
import Image from 'next/image'

import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" width='108' height='30' alt="ig.news" />
                <nav>
                    <ActiveLink activeClasseName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClasseName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}