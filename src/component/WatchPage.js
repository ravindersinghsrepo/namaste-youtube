import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = ()=>{
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const id = searchParam.get('v')
  useEffect(()=>{
    dispatch(closeSidebar());
  },[]);
  
  return(
      <div className="flex flex-col">
        <div className="px-5 flex">
        <div>
        <iframe width="900"
         height="450" 
         src={`https://www.youtube.com/embed/${id}?si=W4iD5q4aOmQ6k6C9`} 
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div>
           <LiveChat/>
        </div>
        </div>
        <CommentsContainer/>
      </div>
  )
}
export default WatchPage; 