import React from "react"

function Message() {
  return (
    <>
      <div className="p-4 space-y-4 h-[78vh] overflow-y-auto bg-gray-900 text-white rounded-xl shadow-inner">
        {/* Sender Message */}
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent rounded-2xl px-5 py-3 shadow-lg transition duration-300 ease-in-out">
            That's never been done in the history of the Jedi.
          </div>
        </div>

        {/* Receiver Message */}
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info rounded-2xl px-5 py-3 shadow-lg transition duration-300 ease-in-out">
            Calm down, Anakin.
          </div>
        </div>

        {/* More Messages */}
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent rounded-2xl px-5 py-3 shadow-lg">
            You're going down a path I can't follow.
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info rounded-2xl px-5 py-3 shadow-lg">
            If you're not with me, then you're my enemy.
          </div>
        </div>
      </div>
    </>
  )
}

export default Message
