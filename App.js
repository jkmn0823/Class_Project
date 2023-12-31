import React, {useState,useRef} from "react";
import Header from "./Header";
import MainLayOut from "./MainLayOut"
import "./App.css"
import Gaesipan from "./Gaesipan";

function App(){
    const [id,setId] = useState("")
    const [password, setPassword] = useState("");
    const [onlogin, setOnlogin] = useState(0);
    const [item, setItem] = useState([]);
    const itemNumber = useRef(0);
    const [postid,setPostId] = useState("")
    const postRef = useRef(0);
    const [postContents, setPostContents] = useState([])
    function CreateItem(number,itemname,type,count,price){
        const newItem = {
            number: itemNumber.current,
            itemname,
            type,
            count,
            price,
        }
        setItem([newItem, ...item] )
        itemNumber.current += 1
    }
    function CreatePost(contents){
        const newPost = {
            pid: postRef.current,
            contents
        }
        postRef.current += 1
        setPostContents([newPost, ...postContents])
    }
    return(
        <>
        <div className="App">
            <Header 
            id={id}
            password={password} 
            setId={setId} 
            setPassword={setPassword}
            onlogin={onlogin}
            setOnlogin={setOnlogin}   
            > 
            </Header>
            <MainLayOut CreateItem={CreateItem}></MainLayOut>
        </div>
        {/* <div>
            <Gaesipan CreatePost={CreatePost}></Gaesipan>
        </div> */}
        </>
    )
}
export default App;