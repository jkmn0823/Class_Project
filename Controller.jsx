import React from "react";
import "./css/Controller.css"

function Controller(){
    return(
        <div className="Controller">
            <button className="button">Home</button>
            <button className="button">게시판</button>
            <button className="button">품목추가</button>
            <button className="button">품목관리</button>
            <button className="button">재고주문</button>
            <button className="button">Help</button>
        </div>
    )
}
export default Controller;