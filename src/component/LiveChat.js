import {generateRandomComment, generateRandomName} from '../Utils/helper'
import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";;

const LiveChat = ()=>{
    const [liveMsg , setliveMsg] = useState(null)
    const dispatch = useDispatch(); 
    const chatMessage = useSelector(store=>store.chat.messages)

    function handleSubmit(e){
        e.preventDefault();
        dispatch(addMessage({
            name:'Ravi',
            message : liveMsg
        }))
        setliveMsg('');
    }
    useEffect(()=>{
        
        const i = setInterval(()=>{
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomComment()
            })) 

        },1000);

        return()=>{
            clearInterval(i);
        }
    },[])

    return(
        <>
        <div className=" flex flex-col-reverse h-[450px] w-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
            {
                chatMessage.map((c,index)=>(<ChatMessage
                    name={c.name}
                    key={index}
                    message={c.message}
                    />))
            }
        </div>
        <form className='px-2 mx-2 m-1' onSubmit={(e)=>handleSubmit(e)}>
            <input type='text' className='w-80 h-8 border-2 border-gray-400 rounded-lg' value={liveMsg} onChange={(e)=>setliveMsg(e.target.value)}/>
            <button className='bg-green-300 border border-2 rounded-lg h-9 ml-2 px-2'>Send</button>
        </form>
        
        </>
    )
}
export default LiveChat;