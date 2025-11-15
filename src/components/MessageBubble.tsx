import { type Message } from "../types/Message";

export default function MessageBubble({ message }: { message: Message }) {
    const isUser = message.role === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl shadow whitespace-pre-wrap leading-relaxed ${isUser
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-900 rounded-bl-none"
                    }`}
            >
                {message.text}
            </div>
        </div>
    );
}