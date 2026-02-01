import React, { useEffect } from 'react'
import canvasImage from '../utils/canvasimage.js'
import gsap from 'gsap'

function Canvas() {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const images = canvasImage.slice(0, 150);
        const frames = [];
        
        const loadPromises = images.map(url => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.src = url;
            });
        });
        
        Promise.all(loadPromises).then(loadedFrames => {
            frames.push(...loadedFrames);
            
            let currentFrame = 0;
            
            function drawFrame() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(frames[currentFrame], 0, 0, canvas.width, canvas.height);
            }
            
            gsap.to({frame: 0}, {
                frame: 149,
                duration: 5, // Duration for one cycle in seconds
                ease: "none",
                onUpdate: function() {
                    currentFrame = Math.floor(this.targets()[0].frame);
                    drawFrame();
                },
                repeat: -1,
                yoyo: true
            });
        });
    }, [])
    
    return (
        <>
        <canvas id='canvas' width="512" height="512">
            Canvas
        </canvas>
        {/* <h1>Lorasda</h1> */}
        </>
    )
}

export default Canvas