import { useState } from "react";
import './Counter.css';

const Counter = () => {
    const [nr, setNr] = useState(0);

    const fnPlus = () => {
        setNr(nr + 1);
        console.log(nr);
        //  document.getElementById('idOutput').value = nr;
    }

    const fnMinus = () => {
        setNr(nr - 1);
        console.log(nr);
        //  document.getElementById('idOutput').value = nr;
    }

    const fnReset = () => {
        setNr(0);
        console.log('Reset ', nr);
        // document.getElementById('idOutput').value = nr;
    }

    return (

        <div className="clsDivParent">
            <div className="clsDivTop">
                <button onClick={fnMinus}>-</button>
                <input id="idOutput" type="text" value={nr} placeholder="0" /><button onClick={fnPlus}>+</button>
            </div>
            <div className="clsDivBottom"><button onClick={fnReset}>Reset</button></div>
        </div>

    )
}

export default Counter;