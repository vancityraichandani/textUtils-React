import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('');
    let styles = {
        fontFamily: "impact"
    };
    return (
        <>
            <div className='container'>
                <h1 className='container my-4' style={styles}>{props.heading}</h1>
                <div className='container my-2'>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleChange} placeholder='Start typing here!!!
                        Convert to Uppercase, Lowercase, Code convert multiple times to send encrypted messages using code button. 
                        Decode using decode button multiple times.
                    ex: type somesh, then press CODE n times to get encrypted text. Press DECODE n times to get your word back!
                           ' rows="5"></textarea>
                    </div>
                </div>
                <button type="button" className="mx-3 col-2 btn btn-outline-info" onClick={upFn}>⬆️ Upper Case ⬆️ </button>
                <button type="button" className="col-2 btn btn-outline-info" onClick={lowFn}>⬇️ Lower Case ⬇️ </button>
                <button type="button" className="mx-3 col-2 btn btn-danger" onClick={codeFn}>🔒 Code 🔒</button>
                <button type="button" className="mx-3 col-2 btn btn-success" onClick={decodeFn}>🔓 Decode 🔓</button>
                <hr className='bg-primary' />
                <span className='mx-5'>Char Count : {text.length}</span>
                <hr className='bg-primary' />
                <h3 className='my-4 mx-2'>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
    function upFn() {
        let newText = text.toUpperCase()
        setText(newText);
    }
    function lowFn() {
        let newText = text.toLowerCase()
        setText(newText);
    }
    function codeFn() {
        let newText = [];
        for (let i = 0; i < text.length; i++) {
            var e = text[i];
            newText[i] = text.charCodeAt(i);
        }
        let str = "";
        str = newText.join(",");
        setText(str);
    }
    function decodeFn() {
        let newText = [];
        for (let i = 0; i < text.split(",").length; i++) {
            var e = text.split(",")[i];
            newText[i] = String.fromCharCode(e);
        }
        let str = "";
        str = newText.join("");
        setText(str);
    }
    function handleChange(event) {
        console.log("change");
        setText(event.target.value)
    }
}


