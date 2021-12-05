import { useState } from 'react';
import Pallet from '../pallet';
import './panel.scss';


const Panel = () => {
    const [currentColor, setCurrentColor] = useState("#ff0000");
    const [palletColor, setPalletColor] = useState("#ff0000")

    return ( 
        <div className="panel">
            {/* <div className="title">Color Picker</div> */}
            <div className="palletWrapper">
                <div className="wrapperLeft" style={{backgroundColor: `${currentColor}`}} />
                <div className="wrapperRight">
                    <Pallet color={currentColor} palletColor={palletColor} setCurrent={setCurrentColor} setPallet={setPalletColor} />
                </div>
                
            </div>
        </div>
     );
}
 
export default Panel;