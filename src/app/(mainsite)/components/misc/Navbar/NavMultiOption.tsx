import styles from "./navbar.module.css"
import Link from "next/link"
// import { usePathname } from "next/navigation"
import { useEffect, useRef, useState, useImperativeHandle, forwardRef, ReactNode } from "react"

interface optionProps {
    ref: any,
    links: {url: string, title: string}[],
    icon?: ReactNode,
    title: string
}



 const NavMultiOption = forwardRef((props: optionProps, servicesRef)=>{
  // const pathname = usePathname()
    const linkElems = props.links.map((data, i)=>{
        return (<Link key={i} href={data.url}><li>{data.title}</li></Link>)
    })

    const listRef: any = useRef()

    const active: any = useRef()
    active.current = false

    useEffect(()=>{
      const isOnTouch = window.matchMedia("(max-width: 990px)").matches
      if(!isOnTouch){
        //@ts-ignore
        servicesRef!.current.classList.add(styles.dropdownActive)
      }else{
        window.addEventListener("click", (evt)=>{
          //@ts-ignore
          if(evt.target != listRef.current){
            active.current = false
            toggleActive()
          }
        })
      }
    }, [])

    // useEffect(()=>{
    //   active.current = false
    //   toggleActive()
    // }, [pathname])

    function toggleActive(){
      
      if(active.current){
        //@ts-ignore
        servicesRef!.current.classList.add(styles.dropdownActive)
      }else{
        //@ts-ignore
        servicesRef!.current.classList.remove(styles.dropdownActive)
      }
      
    }

  return (
    //@ts-ignore
    <div ref={servicesRef} className={`${styles.dropdownLink} ${styles.navLink}`}>
              <li ref={listRef} className={`nav-noclose ${styles.dropdownList}`} onClick={()=>{
                active.current = !active.current
                toggleActive()
              }}>
              {(props.icon !== undefined) ? props.icon : <span className={styles.noIcon}></span>}
                <span style={{pointerEvents: "none"}}>{props.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"></path></svg>
              </li>

              <ul>
                {linkElems}
              </ul>
            </div>
  )
})

export default NavMultiOption
