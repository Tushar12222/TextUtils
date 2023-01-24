import React, {useState} from 'react'



export default function TextForm(props) {
  
    const handleloClick = ()=>{
      setPrevText(text);
      let newText = text.toLowerCase();
      setText(newText);
      if(text.length === 0){
        props.showAlert("Please enter the text to apply the changes","info");
      }
      else{
        props.showAlert("Converted to LowerCase","success");
      }
      
    }  
    const handleUpClick = ()=>{
        setPrevText(text);
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length === 0){
          props.showAlert("Please enter the text to apply the changes","info");
        }
        else{
          props.showAlert("Converted to UpperCase","success");
        }
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleSpaceClick = ()=>{
        setPrevText(text);
        let newText = text.split(" ").join("");
        setText(newText);
        if(text.length === 0){
          props.showAlert("Please enter the text to apply the changes","info");
        }
        else{
          props.showAlert("Spaces Removed","success");
        }
    }
    const handleClearClick = ()=>{
        setPrevText(text);
        let newText = "";
        setText(newText);
        if(text.length === 0){
          props.showAlert("Please enter the text to apply the changes","info");
        }
        else{
          props.showAlert("Text Cleared","success");
        }
    }
    const handleRevClick = ()=>{
        
        
        setText(prevText);
        if(text.length === 0){
          props.showAlert("Please enter the text to apply the changes","info");
        }
        else{
          props.showAlert("Original Text Recovered","success");
        }
    }
    const [text, setText] = useState('');
    const [prevText, setPrevText] = useState('');
  return ( 
    <>
    
  <div className="mb-3" style={{color:props.mode === 'dark'? 'white' : 'black'}}>
    <label htmlFor="myBox"  className="form-label"><h4>{props.heading}</h4></label>
    <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'? '#13466e' : 'white', color:props.mode === 'dark'? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"/>

  </div>
  <button  className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
  <button  className="btn btn-primary mx-1 my-1" onClick={handleloClick} >Convert to LowerCase</button>
  <button  className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick} >Remove Spaces</button>
  <button  className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button><br />
  
  <button  className="btn btn-primary mx-1 my-1" onClick={handleRevClick} >Revert to Original Text</button>


  <div className="container my-2" style={{color:props.mode === 'dark'? 'white' : 'black'}}>
    <br />
    <h1>Your text summary:</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters, {text.split(".").filter((element)=>{return element.length!==0}).length} sentences</p>
    <h2>Preview:</h2>
    <p>{text.length>0 ? text : "Enter text in the textbox to preview"}</p>
  </div>

    </>
  )
}
