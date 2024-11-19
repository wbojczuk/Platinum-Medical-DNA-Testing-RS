"use client"

import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import "./messagestatus.css"
import successAnim from "./anim/success.json";
import errorAnim from "./anim/error.json";
import loadingAnim from "./anim/loading.json"
import { useEffect, useRef, useState } from 'react';

interface messageSuccessProps{
  status: string,
  setStatus: any
}

export default function MessageStatus(props: messageSuccessProps) {
    const wrapperElem: any = useRef();

    function animEnd(){
        wrapperElem.current.style.opacity = "0";
        props.setStatus("none")
    }

  return (
    <>
    {(props.status != "none") &&  <div
    ref={wrapperElem}
    style={{display: (props.status != "none") ? "inline-flex" : "none"}}
    id="messageSuccess">
        <div id="messageSuccessWrapper">
            {(props.status == "loading") && <Lottie
            animationData={loadingAnim}
            play={true}
            loop={true}
            ></Lottie>}

            {(props.status != "loading") && <Lottie
            animationData={(props.status == "success") ? successAnim : errorAnim}
            play={true}
            loop={false}
            onComplete={animEnd}
            ></Lottie>}
        </div>
    </div>}
    </>
  )
}
