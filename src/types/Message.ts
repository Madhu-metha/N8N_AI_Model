export type Message = {
    id: string;
    role: "user" | "bot" | "system";
    text: string;
};
