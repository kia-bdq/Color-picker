import { useEffect, useRef, useState} from 'react';
import Pointer from "../pointer";
import './pallet.scss';


const Pallet = ({color, palletColor, setCurrent}) => {
    const colorCanvas = useRef(null)

    const [offset, setOffset] = useState({
        offsetX: 0,
        offsetY: 0
    })

    const changeColor = () =>{
        const ColorCtx = colorCanvas.current.getContext('2d');
        const x = offset.offsetX;
        const y = offset.offsetY;
        const imageData = ColorCtx.getImageData(x, y, 1, 1).data;
        const rgbaColor = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},1)`;
        
        setCurrent(rgbaColor)
    }
    useEffect(()=>{
        const ColorCtx = colorCanvas.current.getContext('2d');
        
        const gradientH = ColorCtx.createLinearGradient(0, 0, ColorCtx.canvas.width, 0);
        gradientH.addColorStop(0, '#fff');
        gradientH.addColorStop(1, palletColor);
        ColorCtx.fillStyle = gradientH;
        ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

        const gradientV = ColorCtx .createLinearGradient(0, 0, 0, 300);
        gradientV.addColorStop(0, 'rgba(0,0,0,0)');
        gradientV.addColorStop(1, '#000');
        ColorCtx .fillStyle = gradientV;
        ColorCtx .fillRect(0, 0, ColorCtx .canvas.width, 
        ColorCtx .canvas.height); 
            
    })


    useEffect(()=>{

        changeColor()

    }, [offset])

    return ( 
        <div className="pallet">
                    
            <Pointer color={color} offset={offset} setOffset={setOffset} />

            <canvas ref={colorCanvas} 
            width="455" height="255" 
            className="palletCanvas" 
            />

        </div>
        
     );
}
 
export default Pallet;