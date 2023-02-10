

import { useState } from "react";
import "./List.css";
 function List ({nome}) {
    const [textButton, setTextButton] = useState('inserir item');
    const [styleBtn, setStyleBtn] = useState('');
    const [color, setColor] = useState('noChecked');
    const statusChange = () => {
      if(color === 'noChecked'){
        setColor('checked');
        setStyleBtn('btnClicked');
        setTextButton('inserido')
      }else{
        setColor('noChecked');
        setTextButton('inserir item');
        setStyleBtn('');
      }
    }
  return (
    <div className={`container ${color}`}>
      <h2 >{nome}</h2> 
      <input type="button" value={textButton} onClick={statusChange} className={`btnChecked ${styleBtn}`}/>

    </div>
  )
}
export default List

