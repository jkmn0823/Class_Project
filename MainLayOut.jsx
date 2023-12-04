import React, {useState} from "react";
import Controller from "./Controller";
import "./css/MainLayOut.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Graph from "./Graph";

function MainLayOut({CreateItem,onlogin}){
    const [value, onChange] = useState(new Date());
    return(
        <div className="AllPage">
            <div className="LeftSelect">
                <h4>메뉴</h4>
                <Controller CreateItem={CreateItem} onlogin={onlogin}></Controller>
            </div>
            <div className="MainPage">
                <div className="CommunityView">
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