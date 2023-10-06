import { useState } from "react";

const Footer = () => {
    const [array, setArray] = useState(["a", "b", "c"])
    const r = () =>{
        setArray(ca =>{
            console.log(ca)
            return ["b"]
        })
    }
    return (
        <div>
            <button onClick={r}>h</button>
         {array.join(",")}
        </div>
    );
};

export default Footer;