import { useState } from "react";
//import Alert from "./Alert";

export default function TextForm(props) {

  const textChangeHandler=(event)=>{
    
    setText(event.target.value)
    setConvertedText((event.target.value))
  }

  const toUpperCaseHandler=()=>{
    setConvertedText(text.toUpperCase())
    //console.log(text)
    props.showAlert("Converted to uppercase", "success")
  }

  const toLowerCaseHandler=()=>{
    setConvertedText(text.toLowerCase())
    props.showAlert("Converted to lowercase", "success")

  }

  const copyTextHandler=()=>{
    navigator.clipboard.writeText(convertedText)
    props.showAlert("text copied", "success")
  }

  const [text, setText] = useState();
  const [convertedText, setConvertedText] = useState()

  return (
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      
      <label htmlFor="myBox" className="form-label">
        <h4>Text Area</h4>
      </label>
      <textarea
        className="form-control"
        id="myBox"
        rows={3}
        placeholder={props.placeholder}
        value={text}
        onChange={textChangeHandler}
      ></textarea>
      <button className="m-1 btn btn-primary" onClick={toUpperCaseHandler}>
        To Uppercase
      </button>
      <button className="m-1 btn btn-primary" onClick={toLowerCaseHandler}>
        To Lowercase
      </button>
      <button className="m-1 btn btn-primary" onClick={copyTextHandler}>
        Copy text
      </button>
      <h3 style={{color:'red'}} className="m-1">{convertedText?"Text Preview":""}</h3>
      <h4 className="m-1">{convertedText}</h4>
      <h6 className="m-1">{convertedText?`${convertedText.split(" ").length} words and ${convertedText.length} characters`:""}</h6>
    </div>
  );
}

TextForm.defaultProps = {
  placeholder: "Enter text here",
};
