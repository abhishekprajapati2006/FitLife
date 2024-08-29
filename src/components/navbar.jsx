import { Home, ServerCrash } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function navbar() {
  return (
    <div className="">
      <hr />
      <div className="flex flex-row mx-12 gap-[6.5rem] w-full h-4 py-3">
        <Link to="/"><Home size={30} /></Link>
        <ServerCrash size={30} />
        <div className=""></div>
      </div>
    </div>
  )
}
