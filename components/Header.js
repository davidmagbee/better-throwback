import React from "react"
import { BsSpotify, BsPlayFill } from "react-icons/bs"

export default function Header() {
    return (
        <div className="bg-header w-full p-4 flex items-center justify-between">
            <div className="flex items-center">
                <BsSpotify className="text-textLight" size="30px"/>
                <h1 className="text-textLight ml-2 font-bold text-2xl">Better Throwback</h1>
            </div>
        </div>
    )

}