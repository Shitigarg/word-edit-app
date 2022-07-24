import React, {useState} from 'react'

export default function Textbox() {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        console.log('Button was clicked');
        // console.log(text);
        let uppercase=text.toUpperCase();
        setText(uppercase);
    }
    const handleOnChange =(event)=>{
        console.log('bbaofofleaj');
        setText(event.target.value);
    }
  return (
    <>
    
  <div className="mb-3">
    
    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Change to UpperCase.</button>
  </>
  )
}
