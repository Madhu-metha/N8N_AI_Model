import { useEffect, useRef } from "react";
import { type Message } from "../types/Message";
import MessageBubble from "./MessageBubble";

export default function MessageList({ messages }: { messages: Message[] }) {
    const endRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-auto p-6 space-y-4">
            {messages.map((m) => (
                <MessageBubble key={m.id} message={m} />
            ))}

            <div ref={endRef}></div>
        </div>
    );
}
