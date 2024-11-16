"use client"

import "./hamburgers.min.css"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import NavMultiOption from "./NavMultiOption"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnTouch, setIsOnTouch] = useState(false)
  const [isOnMobile, setIsOnMobile] = useState(false) 
  const [isTopBarOpen, setIsTopBarOpen] = useState(true)


  // ****************** Add NAV OPTION REFS HERE ******************

  const homeRef: any = useRef()
  const aboutRef: any = useRef()
  const contactRef: any = useRef()
  const reviewsRef: any = useRef()

  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()
  const content2Ref: any = useRef()
  const topBarRef: any = useRef()
  const navRef: any = useRef()


  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/about"],
      ref: aboutRef
    },
    {
      triggers: ["/contact"],
      ref: contactRef
    },
    {
      triggers: ["/reviews"],
      ref: reviewsRef
    },
    {
      triggers: ["/", "/home"],
      ref: homeRef
    }
    
  ]

  const pathname = usePathname()

  useEffect(()=>{
    currentPageTriggers.forEach((data)=>{
      if(data.triggers.includes(pathname)){
        data.ref.current.classList.add(styles.active)
      }else{
        data.ref.current.classList.remove(styles.active)
      }
    })
  }, [pathname])


  useEffect(()=>{
    const isOnTouch = window.matchMedia("(max-width: 990px)").matches
    setIsOnTouch(isOnTouch)
    setIsOnMobile(window.matchMedia("(max-width: 649px)").matches)
    
    if(window.scrollY > 10){
      navbarAnimIn()
    }else{
      navbarAnimOut()
    }

    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 10){
        navbarAnimIn()
      }else{
        navbarAnimOut()
      }
    })

    if(isOnTouch){
      window.addEventListener("click", (evt)=>{
        //@ts-ignore
        if(!(evt.target.classList.contains("nav-noclose"))){
          closeMenu()
        }
      })
    }
  }, [])

  function navbarAnimIn(){
    // const topbarStyles = window.getComputedStyle(topBarRef.current)
    // const topAmt = parseFloat(topbarStyles.height) + parseFloat(topbarStyles.paddingTop) + parseFloat(topbarStyles.paddingBottom)
    // navRef.current.style.transform = `translateY(-${topAmt}px)`
  }

  function navbarAnimOut(){
    // navRef.current.style.transform = "translateY(0)"
  }


  function toggleMenu(){
    if(menuOpen){
     closeMenu()
    }else{
     openMenu()
    }
  }

  function closeMenu(){
    setMenuOpen(false)
    hamburgerRef.current.classList.remove("is-active")
    contentRef.current.style.transform =  "scaleY(0)"
  }

  function openMenu(){
    setMenuOpen(true)
    hamburgerRef.current.classList.add("is-active")
    contentRef.current.style.transform =  "scaleY(1)"
  }
  
  const hamburgerClass = "hamburger--collapse"
  /* Here’s the list of hamburger-type classes you can choose from:

        hamburger--3dx
        hamburger--3dx-r
        hamburger--3dy
        hamburger--3dy-r
        hamburger--3dxy
        hamburger--3dxy-r
        hamburger--arrow
        hamburger--arrow-r
        hamburger--arrowalt
        hamburger--arrowalt-r
        hamburger--arrowturn
        hamburger--arrowturn-r
        hamburger--boring
        hamburger--collapse
        hamburger--collapse-r
        hamburger--elastic
        hamburger--elastic-r
        hamburger--emphatic
        hamburger--emphatic-r
        hamburger--minus
        hamburger--slider
        hamburger--slider-r
        hamburger--spin
        hamburger--spin-r
        hamburger--spring
        hamburger--spring-r
        hamburger--stand
        hamburger--stand-r
        hamburger--squeeze
        hamburger--vortex
        hamburger--vortex-r */


  return (
    <nav ref={navRef} className={styles.mainNav}>

      <div ref={topBarRef} className={styles.topBar}>
        <span className={styles.topBarText}>Need some construction done? Contact us today!</span>

        <div className={styles.topBarLinks}>
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>{process.env.NEXT_PHONE_NUMBER_FORMATTED}</a>

          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>

          <a href="https://google.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>{process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}</a>

          
          
        </div>
      </div>

      <div className={styles.navContent}>
      <Link href="/" className={styles.logo}>
        <img src="/img/logo.png" className={styles.logoImg} width={500} height={250} alt="Logo" />
        {/* <span>logo text</span> */}
      </Link>

        

     
        
      <div className={styles.contentWrapper}>
      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className={`hamburger ${hamburgerClass} mobile tablet nav-noclose`} type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        <div ref={content2Ref} className={styles.content}>
          <ul ref={contentRef} className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path></svg>}
          ref={homeRef}
          />

          <NavOption
          title="About Us"
          url="/about"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>}
          ref={aboutRef}
          />

          <NavOption
          title="Reviews"
          url="/reviews"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path></svg>}
          ref={reviewsRef}
          />

          <NavOption
          title="Contact"
          url="/contact"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>}
          ref={contactRef}
          />

          
          <a href={"tel:"+process.env.NEXT_PUBLIC_PHONE_NUM} className={styles.cta}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
            <span>CALL US {process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</span>
          </a>
          

          </ul>

          {/* ******* PUT SHOPIFY CART HERE ******** */}

        </div>
        
        </div>
      </div>

      
    </nav>
  )
}
