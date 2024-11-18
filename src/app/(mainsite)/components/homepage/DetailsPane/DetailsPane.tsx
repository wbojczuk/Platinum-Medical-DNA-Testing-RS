"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import "./detailsPane.css"

interface detailsPaneProps{
  name: string
  desc: string
  img: string
  isDetailsPaneOpen: boolean
  setIsDetailsPaneOpen: any
}

export default function DetailsPane(props: detailsPaneProps) {

  const [shaderStyles, setShaderStyles] = useState({})
  const [wrapperStyles, setWrapperStyles] = useState({})
  const [detailsPaneStyles, setDetailsPaneStyles] = useState({})

  const shaderRef: any = useRef()
  const paneRef: any = useRef()

  function openDetailsPane(){
    paneRef.current.scrollTo(0,0)
    document.querySelector("body")!.style.overflowY = "hidden";
    props.setIsDetailsPaneOpen(true);
      setWrapperStyles({
        visibility: "visible"
      })
      setShaderStyles({
        opacity: 1
      })
      setDetailsPaneStyles({
        transform: "translateX(0)"
      })
      
    
    
  }

  async function closeDetailsPane(){
    if(props.isDetailsPaneOpen){
      document.querySelector("body")!.style.overflowY = "scroll";
      props.setIsDetailsPaneOpen(false);
      setDetailsPaneStyles({
        transform: "translateX(100%)"
      })
      setShaderStyles({
        opacity: 0
      })
      shaderRef.current.ontransitionend = ()=>{
        setWrapperStyles({
          visibility: "hidden"
        })
        shaderRef.current.ontransitionend = null;
      }
    }
    
  }

  function addToForm(){
    const formDetails: HTMLTextAreaElement = document.getElementById("detailsInput") as HTMLTextAreaElement;
    closeDetailsPane();
    window.location.href = "#estimateForm";
    formDetails.focus();
    formDetails.textContent = `Hi, I'm interested in ${props.name}.`;
    formDetails.setSelectionRange(-1, -1);
  }

  useEffect(()=>{
    if(props.isDetailsPaneOpen){
      openDetailsPane();
    }else{
      closeDetailsPane();
    }
  }, [props.isDetailsPaneOpen])


  return (
    <div id="detailsPaneWrapper" style={wrapperStyles}>
      <div
      ref={shaderRef}
      className="shader"
      style={shaderStyles}
      onClick={closeDetailsPane}
      ></div>
      <div id="detailsPane" style={detailsPaneStyles} ref={paneRef}>
        <button id="detailsPaneClose" onClick={closeDetailsPane}></button>
        <img src={props.img} alt="Service Image" />
        <h2 id="detailsPaneName">{props.name}</h2>
        <p id="detailsPaneDescription">{props.desc}<br/><br />Contact us and let us get you the answers you need!</p>
        <Link id="addServiceToForm" className='main-link' href='/contact'>Contact</Link>
      </div>
    </div>
  )
}
