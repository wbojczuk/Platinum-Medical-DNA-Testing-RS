import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState, useImperativeHandle, forwardRef, ReactNode } from "react"


interface optionProps {
    ref: any,
    url: string
    icon?: ReactNode,
    title: string
}

 const NavOption = forwardRef((props: optionProps, parentRef)=>{

  return (
    //@ts-ignore
    <Link ref={parentRef} href={props.url} className={styles.navLink}>
              <li>
                {(props.icon !== undefined) ? props.icon : <span className={styles.noIcon}></span>}
                <span>{props.title}</span>
              </li>
            </Link>
  )
})

export default NavOption
