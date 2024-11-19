"use client"
import { useEffect, useRef } from "react"
import styles from "./faq.module.css"
import gsap from "gsap"

export default function FAQItem(props: faqType) {

    const isOpen: any = useRef()
    isOpen.current = false;

    const caretRef: any = useRef()
    const answerRef: any = useRef()
    const timelineRef: any = useRef()
    const questionRef: any = useRef()

    useEffect(()=>{
        timelineRef.current = gsap.timeline({defaults:{
            ease: "power1.inOut",
            duration: 0.3
        }})

        gsap.set(caretRef.current,{
            rotate: "0deg"
        })
        gsap.set(answerRef.current, {
            height: 0
        })

        timelineRef.current.to(answerRef.current, {
            height: "auto"
        }).to(caretRef.current,{
            rotate: "-180deg"
        }, "<")
        timelineRef.current.pause()


    }, [])

    function toggleAnswer(){
        if(isOpen.current){
            timelineRef.current.reverse()
        }else{
            timelineRef.current.play()
        }
        isOpen.current = !isOpen.current;
    }

  return (
    <div className={styles.faqItem}>
        <div className={styles.headingContent} onClick={toggleAnswer}>
            <span ref={questionRef}>{props.question}</span>
            <img ref={caretRef} src="./icons/caret-down.svg" aria-hidden />
        </div>
        <div ref={answerRef} className={styles.faqItemAnswer}>
            <p>{props.answer}</p>
        </div>
        
    </div>
  )
}
