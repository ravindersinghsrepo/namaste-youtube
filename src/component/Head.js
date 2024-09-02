import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";
import { addCache } from "../Utils/searchSlice";

const Head = ()=>{
    const[searchQuery , setSearchQuery] = useState('');
    const[suggestions , setSuggestion] = useState(null);
    const searchCache = useSelector(store=>store.search);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery])
            }else{
                getSearchSuggestion();
            }
        },200);

        return()=>{
            clearTimeout(timer)
        }
    },[searchQuery]) ; 

    const getSearchSuggestion = async()=>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const jsonData = await data.json();
        setSuggestion(jsonData[1]);
        dispatch(addCache({
            [searchQuery]:jsonData[1]
        }))
    }


    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu()); 
    }; 
    console.log(suggestions)
    return(
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img 
                className='h-8 cursor-pointer'
                src='https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_menu_closed-512.png' alt='hamburger-menu'
                onClick={toggleMenuHandler}
                />
                <a href="/">
                <img
                 className='h-8 mx-2'
                 src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png' alt='youtube-logo'/>
                </a>

            </div>
            <div className='col-span-10 px-10'>
                <div>
                <input type='text' className='w-1/2 border-gray-200 border-2 px-5 p-1 rounded-l-full ' 
                value={searchQuery} 
                onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button className='border-gray-200 border-2 rounded-r-full px-5 p-1 bg-gray-100'>🔍</button>
                </div>
                {
                    (suggestions.length>0)&&
                    (<div className="absolute bg-gray-200 py-2 px-5 w-[27rem] shadow-lg rounded-xl">
                    <ul>
                        {(
                            suggestions.map(s=><li className="py-2 hover:bg-gray-100">🔍{s}</li>)
                        )}
                    </ul>
                   </div>)
                }
                
            </div>

            <div className='col-span-1'>
                <img className='h-8' src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg' alt='user-icon'/>
            </div>
        </div>
    )
}
export default Head ;