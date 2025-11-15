import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatInput({
    value,
    onChange,
    onSend,
    disabled,
}: {
    value: string;
    onChange: (v: string) => void;
    onSend: () => void;
    disabled: boolean;
}) {
    return (
        <div className="p-4 bg-white border-t flex items-center gap-3">
            <TextField
                fullWidth
                placeholder="Ask anything"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSend()}
            />

            <Button
                variant="contained"
                endIcon={<SendIcon />}
                disabled={disabled}
                onClick={onSend}
                className="!bg-blue-600 hover:!bg-blue-700"
            >
                Send
            </Button>
        </div>
    );
}
