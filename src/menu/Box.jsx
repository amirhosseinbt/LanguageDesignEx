import React, { useState } from "react";
const Box = (props) => {
    const [showNested,setShowNested] = useState({});
    const toggleNested = (id) =>
    {
        setShowNested({[id]:!showNested[id]});
    } 
    
  return (
    <div
      className="box" style={{ position: "absolute" }}>
      <div style={{ overflow: "hidden" }}>
        <table style={{ width: "120px" }}>
          <tbody>
            {
                props.data.map((parent,index)=>{
                    return(
                            <tr key={index} className="gt0">
                            <td
                                className={`gt0 ${showNested[parent.id]?'gt2':''}`}
                                onClick={()=>toggleNested(parent.id)}>
                                <nobr >{parent.text}</nobr>
                            </td>
                            {parent.children && <td
                                width="10px"
                                style={{fontFamily:'arial',fontSize:'9px',color:'#dddddd'}}>
                                ◄
                            </td>}
                            {showNested[parent.id]? parent.children && <Box key={index} data={parent.children} />:null}
                         </tr>
                    );
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Box;
