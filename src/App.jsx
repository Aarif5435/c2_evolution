import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import {useState} from "react"
import "./App.css"



function App() {
  const [inputType, setInputType] = useState("text");

  function rightLogoonClick (){
    setInputType(inputType === "text" ? "password" : "text")
  }
  return (
    <div className="container">
      
      <Input variant="filled" onChange={(e)=>e.targer.value} size={{md : 40 , sm : 20, lg : 80, xl: 120}} type={inputType} rightLogo={`https://raw.githubusercontent.com/Sparkenstein/rct-201.may.c2/b85eee93beec6fdc2c71cee014f40c83676450ce/src/Components/eye.svg`} rightLogoOnClick={rightLogoonClick}  />

      <Image width={200} height={200}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-SQtrdX_HWvTlMgbmI8qAZbo5KjUG87pfQ&usqp=CAU" alt="" borderRadius={100} fit="cover"/>

      <Pagination />
    </div>
  );
}

export default App;
