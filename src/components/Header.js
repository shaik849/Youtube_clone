import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { toggleMenu } from '../utils/app.Slice'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';



const Header = () => {
 const dispatch = useDispatch();
 const searchCache = useSelector(store => store.search)
 const [searchQuery, setSearchQuery] = useState("");
 const [suggestions, setSuggestions] = useState([]);
 const [showSuggestions, setShowSuggestions] = useState(false);
 
 useEffect(() => { 

const timer =setTimeout(() => {
  if(searchCache[searchQuery]) {
   setSuggestions(searchCache[searchQuery])
  }
  else{
    getApiSuggestions()
  }
}, 200)

return () => {
  clearTimeout(timer)
}

 }, [searchQuery])

const toggleMenuhandler = () =>{
    dispatch(toggleMenu())
}


const getApiSuggestions = async () =>{
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
  const json = await data.json();
  setSuggestions(json[1])

  // update cache
  dispatch(
    cacheResults({
      [searchQuery]: json[1],
    })
  );
}

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
       <img className='h-8 cursor-pointer' alt="menu" onClick={toggleMenuhandler}
         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" />
   
        <img className='h-6 mx-2 my-1' alt="youtube logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
     
    </div>
    <div className='col-span-10  px-10'>
        <input type="text" className='w-1/2 border py-2 px-10 border-gray-400 rounded-l-full' placeholder='Search'
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        ></input>
        <button type="button" className='border border-gray-400 rounded-r-full px-5 py-2 bg-gray-100'>🔍</button>
    </div>

    {(showSuggestions && suggestions.length > 0) && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] ml-[260px] mt-12 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
    <div className='col-span-1'>
        <img className='h-8'
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
    </div>
    </div>
  )
}

export default Header