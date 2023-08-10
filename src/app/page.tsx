"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function Home (){

    const [inputValue, setInputValue] = useState("")

    const {push} = useRouter()

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        push(`/prediction/${inputValue}`) 
    }

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-br from-white to-green-600">
          <div className="bg-yellow-300 p-10 rounded-lg shadow-xl">

                <h1 className="text-left text-green-600 font-semibold font-serif text-2xl mb-2">Enter Your Name</h1>
            <form action="" className="" onSubmit={handleSubmit}>
                <input type="text" className="text-black p-3 rounded-lg" placeholder="Type Your Name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/> 
                <button className="ml-5 bg-gray-500 px-3 py-3 rounded-lg" type="submit">Predict Data</button>
            </form>
          </div>
        </div>
    )
}