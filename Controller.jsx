import React,{useState} from "react";
import "./css/Controller.css"
import Items from "./Items";

function Controller({onlogin,CreateItem}){
    const [openItem, setopenItem] = useState(false);

    function itemClick(){
        if(onlogin===1){
            setopenItem(true)
        }else{
            alert('관리자 권한이 필요합니다.')
        }
    }
    return(
        <div className="Controller">
            <button className="button">Home</button>
            <button className="button">게시판</button>
            <button className="button" onClick={itemClick}>재고관리</button>
            {openItem && <Items CreateItem={CreateItem} setopenItem={setopenItem}></Items>}
            <button className="button">재고확인</button>
            <button className="button">재고주문</button>
            <button className="button">Help</button>
        </div>
    )
}
export default Controller;