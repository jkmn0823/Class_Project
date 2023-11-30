import React, {useState} from "react";
import Controller from "./Controller";
import "./css/MainLayOut.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Graph from "./Graph";
import Items from "./Items";

function MainLayOut({CreateItem}){
    const [value, onChange] = useState(new Date());
    return(
        <div className="AllPage">
            <div className="LeftSelect">
                <h4>메뉴</h4>
                <Controller></Controller>
            </div>
            <div className="MainPage">
                <div className="CommunityView">
                    <Items CreateItem={CreateItem}></Items>
                </div>
                <div className="Viewer">
                    <Calendar className="Calendar" onChange={onChange} value={value} />
                    <Graph className="Graph"></Graph>
                </div>
            </div>
        </div>
        
    )
}
export default MainLayOut;