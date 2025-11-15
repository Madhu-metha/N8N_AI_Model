import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SideBar from "./components/SideBar";
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import {type Message } from "./types/Message";

const WEBHOOK_URL =
    import.meta.env.VITE_AI_AGENT_WEBHOOK || "http://localhost:5678/webhook/ask";

export default function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: uuidv4(),
            role: "system",
            text: "Hi! I'm your AI assistant. Ask me anything.",
        },
    ]);
    const [input, setInput] = useState("");
    const [isSending, setIsSending] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: uuidv4(),
            role: "user",
            text: input.trim(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsSending(true);

        try {
            const res = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: userMsg.text }),
            });

            const data = await res.json();

            const botMsg: Message = {
                id: uuidv4(),
                role: "bot",
                text:
                    data.response ||
                    data.reply ||
                    data.output ||
                    JSON.stringify(data),
            };

            setMessages((prev) => [...prev, botMsg]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    id: uuidv4(),
                    role: "bot",
                    text: "Error: Unable to connect to AI Agent",
                },
            ]);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="h-screen w-full flex overflow-hidden bg-gray-100">
            <SideBar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

            <div className="flex flex-col flex-1 h-full">
                <ChatHeader
                    isSending={isSending}
                    onMenuClick={() => setDrawerOpen(true)}
                />

                <MessageList messages={messages} />

                <ChatInput
                    value={input}
                    onChange={setInput}
                    onSend={sendMessage}
                    disabled={isSending}
                />
            </div>
        </div>
    );
}
