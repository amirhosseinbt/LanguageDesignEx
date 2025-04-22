import {React , useState} from "react";
import Box from "./Box";
import { data1, data2, data3, data4, data5 } from "../data/data";
const VerticalMenu = () =>
{
    const [show, setShow] = useState({});
    const [activeButton,setActiveButton] = useState('');
    const toggleShow = (id) => {
      setShow({[id]:!show[id]});
    };
    return(
        <td className="menuright" style={{height:'30rem'}}>
        <div id="mendiv">
          <table>
            <tbody>
              <tr className="gt0">
                <td
                  className={`gt0 ${activeButton === '1'?'gt2':''}`}
                  onClick={()=>{toggleShow(1);setActiveButton('1')}}
                >
                  <span>دانشجو</span>
                </td>
                <td
                  width="10px"
                  style={{
                    fontFamily: "arial",
                    fontSize: "9px",
                    color: "#dddddd",
                  }}
                >
                  ◄
                </td>
               {show[1]? <Box data={data1} /> : null}
              </tr>
              <tr className="gt0">
                <td
                  className={`gt0 ${activeButton === '2'?'gt2':''}`}
                  onClick={()=>{toggleShow(2);setActiveButton('2')}}
                >
                  <span>جلسه درس، امتحان و نمره</span>
                </td>
                <td
                  width="10px"
                  style={{
                    fontFamily: "arial",
                    fontSize: "9px",
                    color: "#dddddd",
                  }}
                >
                  ◄
                </td>
               {show[2]? <Box data={data2} /> : null}
              </tr>
              <tr className="gt0">
                <td
                  className={`gt0 ${activeButton === '3'?'gt2':''}`}
                  onClick={()=>{toggleShow(3);setActiveButton('3')}}
                >
                  <span>شهريه</span>
                </td>
                <td
                  width="10px"
                  style={{
                    fontFamily: "arial",
                    fontSize: "9px",
                    color: "#dddddd",
                  }}
                >
                  ◄
                </td>
               {show[3]? <Box data={data3} /> : null}
              </tr>
              <tr className="gt0">
                <td
                  className={`gt0 ${activeButton === '4'?'gt2':''}`}
                  onClick={()=>{toggleShow(4);setActiveButton('4')}}
                >
                  <span>نامه هاي اداري</span>
                </td>
                <td
                  width="10px"
                  style={{
                    fontFamily: "arial",
                    fontSize: "9px",
                    color: "#dddddd",
                  }}
                >
                  ◄
                </td>
               {show[4]? <Box data={data4} /> : null}
              </tr>
              <tr className="gt0">
                <td
                  className={`${activeButton === '5'?'gt2':''}`}
                  onClick={()=>{toggleShow(5);setActiveButton('5')}}
                >
                  <span>گزارش هاي آموزش</span>
                </td>
                <td
                  width="10px"
                  style={{
                    fontFamily: "arial",
                    fontSize: "9px",
                    color: "#dddddd",
                  }}
                >
                  ◄
                </td>
               {show[5]? <Box data={data5} /> : null}
              </tr>
              <tr className="gt0">
                <td
                  className={`gt0 ${activeButton === '6'?'gt2':''}`}
                  onClick={()=>{toggleShow(6);setActiveButton('6')}}
                >
                  <span>اطلاعات جامع دانشجو</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    );
}
export default VerticalMenu;