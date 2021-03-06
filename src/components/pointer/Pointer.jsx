import React, { useRef } from "react";
import './pointer.scss'

const Pointer = ({color, offset, setOffset}) => {
    const pointer = useRef(null)

    let offsetX;
    let offsetY; 
    let mousedown = false; 
    let stateOffsetX = offset.offsetX
    let stateOffsetY = offset.offsetY

    const move=e=>
    {
        const inDivX = e.clientX-pointer.current.parentElement.offsetLeft;
        const inDivY = e.clientY-pointer.current.parentElement.offsetTop;

        // setOffset({offsetX: inDivX, offsetY: inDivY})

        if(mousedown){
            
            if(inDivX <= pointer.current.parentElement.clientWidth){
                if(inDivX >= 0){
                    pointer.current.style.left = `${inDivX-offsetX}px`
                    stateOffsetX = inDivX;
                }else{
                    pointer.current.style.left = `${-offsetX}px`
                    stateOffsetX = 0
                }
                
            }
            else{
                pointer.current.style.left = `${pointer.current.parentElement.clientWidth-offsetX}px` 
                stateOffsetX = pointer.current.parentElement.clientWidth -1;

            }
            
            if(inDivY<= pointer.current.parentElement.clientHeight){
                if(inDivY >=0){
                    pointer.current.style.top = `${inDivY-offsetY}px`;
                    stateOffsetY = inDivY
                }else{
                    pointer.current.style.top = `${-offsetY}px`;
                    stateOffsetY = 0
                }

            }
            else{
                pointer.current.style.top = `${pointer.current.parentElement.clientHeight-offsetY}px`
                stateOffsetY = pointer.current.parentElement.clientHeight
            }

            setOffset({ offsetX: stateOffsetX, offsetY: stateOffsetY})
        }
    }

    const add=e=>
    {
        const inDivX = e.clientX-pointer.current.parentElement.offsetLeft;
        const inDivY = e.clientY-pointer.current.parentElement.offsetTop;

        setOffset({offsetX: inDivX, offsetY: inDivY})

        mousedown=true;
        // offsetX=e.clientX-pointer.current.getBoundingClientRect().left
        // offsetY=e.clientY-pointer.current.getBoundingClientRect().top

        offsetX = pointer.current.clientWidth/2;
        offsetY = pointer.current.clientHeight/2;

        pointer.current.style.left = `${inDivX-8}px`
        pointer.current.style.top = `${inDivY-8}px`

        window.addEventListener('mousemove',move)
        
    }

    const remove= ()=>{
        mousedown=false;
    }

    window.addEventListener("mouseup", remove)

    
    return ( 
        <div className="pointer"
        ref={pointer}
        onMouseDown={add}
        onMouseUp={remove} 
        style={{backgroundColor:`${color}`}}
        />

     );
}
 
export default Pointer;