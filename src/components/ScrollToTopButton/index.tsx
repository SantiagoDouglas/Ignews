import { useEffect, useState } from "react";
import { IoIosArrowUp } from 'react-icons/io'

import styles from './styles.module.scss'

export function ScrollToTopButton() {
  const [ pageYPosition, setPageYPosition ] = useState(0);    

  useEffect(() => {
      function getPageYAfterScroll() {        
          setPageYPosition(window.scrollY)       
      }
      window.addEventListener('scroll', getPageYAfterScroll)
  }, []) 
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      { pageYPosition > 200 &&
        <a type="button" className={styles.buttonBackToTop} onClick={scrollToTop}>
          <IoIosArrowUp size={22} color='#121214'/>
        </a>      
      }
    </>
  )
}