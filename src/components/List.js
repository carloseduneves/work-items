

import { useState } from "react";
import "./List.css";
 function List ({nome}) {
    const [textButton, setTextButton] = useState('inserir item');
    const [styleBtn, setStyleBtn] = useState('')
    const [color, setColor] = useState('noChecked');
  return (
    <div className={`container ${color}`}>
      <h2 >{nome}</h2> 
      <input type="button" value={textButton} onClick={() => {
        setColor('checked');
        setStyleBtn('btnClicked');
        setTextButton('inserido')
        }} className={`btnChecked ${styleBtn}`}/>

    </div>
  )
}
export default List

