import React from "react"
import Chartuser from "./Chartuser"
import Messages from "./Messages"
import Typesend from "./Typesend"

export default function Right() {
  return (
    <>
      <div className="w-full bg-slate-900 text-gray-300">
        <Chartuser />
        <div
          className=" flex-1 overflow-y-auto"
          style={{ maxHeight: "calc(88vh - 8vh)" }}
        >
          <Messages />
          <Messages />
          <Messages />
        </div>
        <Typesend />
      </div>
    </>
  )
}
