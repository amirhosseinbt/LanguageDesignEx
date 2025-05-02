import React from "react";
import logo from '../assets/images/unvarm.gif';
import { dataStudent } from "../data/data";
const Header = () =>{
    return(
        <div id="_mt_bou" style={{position: 'absolute', visibility: 'visible', zIndex: '1000', fontSize: '9px',top: '0px', left: '0px', width: '1351px', height: '48px', backgroundColor:'#F9F8F4'}}>
        <div id="_mt_god" align="center" style={{position: 'absolute', visibility: 'visible', zIndex: '1000', fontSize: '9px', top: '0px', right: '0px', width: '1351px'}}>به نام خدا
        </div>
        <div id="_mt_gt" align="center" style={{position: 'absolute',visibility: 'visible', zIndex: '1000', fontSize: '12px', color: 'rgb(65, 27, 24)', top: '14px', left: '0px', width: '1351px'}}>
        سيستم جامع دانشگاهي گلستان&nbsp;&nbsp;&nbsp;دانشگاه بوعلي سينا
        <br/>
        <span style={{COLOR:'#aa0000'}}></span>
        </div>
        <div id="_mt_arm" style={{position: 'absolute', visibility: 'visible', zIndex: '1000', fontSize: '9px', top: '0px', left: '0px'}}>
        <img alt="" src={logo}/>

        </div>
        <div id="_mt_arm" style={{position: 'absolute', visibility: 'visible',zIndex: '1000',fontSize: '9px', top: '0px', left: '0px'}}>
        </div>
        <div id="_mt_usr" style={{position: 'absolute', visibility: 'visible',zIndex: '1000',fontSize: '9px', right: '6px', bottom: '0px',height:'20px'}}>کاربر : {dataStudent.name}&nbsp;&nbsp;&nbsp;
        <a href="/" style={{color:'blue', textDecoration:'none'}}>خروج </a>
        
        </div>
        <div id="_mt_time" style={{visibility: 'hidden', position: 'absolute', left: '80px',bottom: '0px'}}>11:16:11&nbsp;جمعه&nbsp;29&nbsp;فروردين&nbsp;1404&nbsp;
        </div>
        <div style={{position: 'absolute', visibility: 'hidden', zIndex: '1000', fontSize: '9px'}}>

        </div>
        <div style={{position: 'absolute', visibility: 'hidden', zIndex: '1000', fontSize: '9px'}}>
        </div>
        </div>
    );
}

export default Header;