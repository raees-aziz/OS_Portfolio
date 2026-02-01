import React, { useEffect,useRef,useState } from 'react'
import canvasImage from '../utils/canvasimage.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Canvas() {

    const [index,setIndex]=useState({value:0})
    const canvaRef=useRef(null)


    useGSAP(()=>{
        gsap.to(index,{
            value:148,
            duration:3,
            repeat:-1,
            ease:"linear",
            onUpdate:()=>{
                // console.log(index)
                setIndex({value:Math.round(index.value)})
            }
        })
    }),

    useEffect(() => {
        const canvas=canvaRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image()
        img.src=canvasImage[index.value]
        img.onload=()=>{
            canvas.width=img.width
            canvas.height=img.height
            ctx.drawImage(img,0,0);
         }
        // console.log(canvasImage)
    }, [index])

    return (
        <>
        <canvas id='canvas' className='size-72' ref={canvaRef}>
            Canvas
        </canvas>
        {/* <h1>Lorasda</h1> */}
        </>
    )
}

export default Canvas