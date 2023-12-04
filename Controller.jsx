import React from "react";
import "./Controller.css";
// import Coom0 from "./Coom0~5/Coom0";
import Coom1 from "./Coom0~5/Coom1";
import Coom2 from "./Coom0~5/Coom2";
import Coom3 from "./Coom0~5/Coom3";
import Coom4 from "./Coom0~5/Coom4";
import Items from "./Items";


function Controller({ onChangeNum }) {
    
    
    function Change1(){
        onChangeNum(<Items/>);
    }
    
    function Change2(){
        onChangeNum(<Coom1/>);
    }

    function Change3(){
        onChangeNum(<Coom2/>);
    }

    function Change4(){
        onChangeNum(<Coom3/>);
    }

    function Change5(){
        onChangeNum(<Coom4/>);
    }

    function Change6(){
        onChangeNum(<Coom4/>);
    }


    return(
        <div className="Controller">
            <button className="button" onClick={Change1}>Home</button>
            <button className="button" onClick={Change2}>게시판</button>
            <button className="button" onClick={Change3}>품목추가</button>
            <button className="button" onClick={Change4}>품목관리</button>
            <button className="button" onClick={Change5}>재고주문</button>
            <button className="button" onClick={Change6}>Help</button>
            {/* <p>현재 값 : {ChangeNum}</p> */}
        </div>
    )
}
export default Controller;