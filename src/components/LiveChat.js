import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch()
    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() =>{
       const i = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomName(),
                message: makeRandomMessage(20) + " 🚀",
            }))
        }, 1000)
         return () => clearInterval(i);
    }, [])
  return (
    <>
    <div className='ml-2 p-2 w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
       {
        chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
        ))
       }
    </div>
    <form
        className="w-full ml-2 p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessages({
              name: "Sanavulla",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-[350px]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
 
  )
}

export default LiveChat