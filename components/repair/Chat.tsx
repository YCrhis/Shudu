const Chat = () => {
  const comments = [
    {
      id: 1,
      author: "Juan Pérez",
      role: "Employee",
      initials: "JP",
      message:
        "We identified a damaged hydraulic hose. We are replacing it and checking the pressure system.",
      date: "Today, 09:42",
      mine: false,
    },
    {
      id: 2,
      author: "Carlos Mendoza",
      role: "Employee",
      initials: "CM",
      message:
        "The replacement hose has already been installed. We are currently testing the system.",
      date: "Today, 11:15",
      mine: false,
    },
    {
      id: 3,
      author: "Pedro García",
      role: "Client",
      initials: "PG",
      message:
        "Thanks. Please let me know if the truck will be ready before the deadline.",
      date: "Today, 12:03",
      mine: true,
    },
  ];
  return (
    <aside className="xl:sticky xl:top-24 xl:h-[calc(100vh-120px)]">
      <section className="flex h-full min-h-[600px] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113]">
        {/* Chat header */}
        <div className="border-b border-zinc-800 px-5 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold">Repair conversation</h2>

              <p className="mt-1 text-xs text-zinc-600">Employees & client</p>
            </div>

            <div className="flex -space-x-2">
              {["JP", "CM", "PG"].map((initials) => (
                <div
                  key={initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#111113] bg-zinc-800 text-[9px] font-bold text-zinc-400"
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-6 overflow-y-auto p-5">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`flex gap-3 ${comment.mine ? "flex-row-reverse" : ""}`}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-[10px] font-bold text-amber-500">
                {comment.initials}
              </div>

              <div
                className={`max-w-[80%] ${
                  comment.mine ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`mb-1 flex items-center gap-2 ${
                    comment.mine ? "justify-end" : ""
                  }`}
                >
                  <span className="text-xs font-semibold">
                    {comment.author}
                  </span>

                  <span className="text-[10px] text-zinc-700">
                    {comment.role}
                  </span>
                </div>

                <div
                  className={`rounded-2xl px-4 py-3 ${
                    comment.mine
                      ? "rounded-tr-sm bg-amber-500 text-black"
                      : "rounded-tl-sm bg-zinc-900 text-zinc-300"
                  }`}
                >
                  <p className="text-sm leading-6">{comment.message}</p>
                </div>

                <p
                  className={`mt-1 text-[10px] text-zinc-700 ${
                    comment.mine ? "text-right" : ""
                  }`}
                >
                  {comment.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="border-t border-zinc-800 p-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-2 focus-within:border-amber-500/40">
            <textarea
              /* value={message}
              onChange={(event) => setMessage(event.target.value)} */
              placeholder="Write a message..."
              rows={3}
              className="w-full resize-none bg-transparent px-2 py-1 text-sm text-zinc-200 outline-none placeholder:text-zinc-700"
            />

            <div className="mt-2 flex items-center justify-between">
              <button
                type="button"
                className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-900 hover:text-zinc-300"
              >
                📎
              </button>

              <button
                type="button"
                /* onClick={handleSendMessage}
                disabled={!message.trim()} */
                className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Send
              </button>
            </div>
          </div>

          <p className="mt-2 text-center text-[10px] text-zinc-700">
            Messages are visible to employees and the client.
          </p>
        </div>
      </section>
    </aside>
  );
};

export default Chat;
