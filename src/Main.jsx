import React from "react";
import "./menu/Menu.css";
import "./menu/MenuStyle.css";
import HorizontalMenu from "./menu/HorizontalMenu";
import VerticalMenu from "./menu/VerticalMenu";
const Main = () => {
  return (
    <table border="0" width="100%" height="100%" cellSpacing="0" cellPadding="0" style={{tableLayout: "fixed", borderCollapse: "collapse", marginTop: "50px",}}>
      <colgroup>
        <col style={{ width: "8px" }} />
        <col style={{ width: "162px" }} />
        <col style={{ width: "8px" }} />
        <col/>
        <col style={{ width: "8px" }} />
      </colgroup>
      <tbody>
        <tr style={{ display: "none" }}>
          <td id="tdb" width="8px"></td>
          <td id="tdmdiv" width="165px"></td>
          <td width="8px"></td>
          <td></td>
          <td width="8px"></td>
        </tr>
        <tr height="30px" className="bgfg" style={{ display: "none" }}>
          <td className="corner cornerrt"></td>
          <td id="headnam" align="middle" colSpan="3">
            سيستم جامع گلستان - <label id="F51852" className="txt"></label>
          </td>
          <td className="corner cornerlt"></td>
        </tr>
        <HorizontalMenu/>
        <tr height="4px">
          <td colSpan="5" className="menuright"></td>
        </tr>
        <tr height="8px">
          <td colSpan="2" className="menuright"></td>
          <td className="corner cornerrt"></td>
          <td className="bgfg"></td>
          <td className="corner cornerlt"></td>
        </tr>
        <tr valign="top">
          <td className="menuright"></td>
          <VerticalMenu/>
          <td></td>
          <td>
            <table width="100%" height="100%">
              <colgroup>
                <col width="50%"/>
                <col width="50%"/>
              </colgroup>
              <tbody>
                <tr height="34%" valign="top">
                  <td></td>
                  <td rowSpan="3">
                    <div dir="rtl" id="msdiv" align="center" style={{ paddingLeft: "5px",OVERFLOW: "auto", WIDTH: "100%",HEIGHT: "100%"}} >
                      <div id="mstbl">
                        <table border="0" className="mess" style={{ BORDER: "1px outset" }}>
                          <tbody>
                            <tr>
                              <td style_={{backgroundColor: "#E3FFEC",color: "#707080",fontSize: "9px"}} align="center"
                              ></td>
                            </tr>
                            <tr>
                              <td style={{ padding: "10px" }}>
                                <a href="/" target="_blank">
                                  راهنماي استفاده از قابليت هاي سامانه گلستان
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr height="33%">
                  <td></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr height="4px">
          <td className="menuright" colSpan="5"></td>
        </tr>
      </tbody>
    </table>
  );
};
export default Main;
