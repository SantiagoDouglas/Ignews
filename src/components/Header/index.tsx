import React from 'react';
import Drawer from 'react-modern-drawer'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <header className={styles.headerContainer}>
                <section onClick={toggleDrawer}>
                    <AiOutlineMenu className={styles.iconMenu} />
                </section>              
                
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

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    size={'80vw'}
                    overlayOpacity={0.8}
                    style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                        paddingTop: 20,
                        backgroundColor: '#121214',
                    }}
                >   
                    <header style={{ display: 'flex', alignItems: 'center', paddingBottom: 20, }}>
                        <Image src="/images/logo.svg" width='108' height='30' alt="ig.news" />
                        <FiX color="#737380" size={20} style={{ position: 'absolute', right: 20,}} onClick={toggleDrawer} />
                    </header>             
                    
                    <nav style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <ActiveLink activeClasseName={styles.active} href="/">
                            <a onClick={toggleDrawer}>Home</a>
                        </ActiveLink>
                        <ActiveLink activeClasseName={styles.active} href="/posts">
                            <a onClick={toggleDrawer}>Posts</a>
                        </ActiveLink>
                    </nav>

                    <footer style={{ position: 'absolute', bottom: 50 }}>
                        <SignInButton />                
                    </footer>              
                </Drawer>
            </header>
        </>
    )
}