import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function ChatHeader({
    isSending,
    onMenuClick,
}: {
    isSending: boolean;
    onMenuClick: () => void;
}) {
    return (
        <AppBar position="static" className="bg-white shadow text-black">
            <Toolbar className="flex justify-between">
                <div className="flex items-center gap-3">
                    <IconButton onClick={onMenuClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Aurena AI Chat</Typography>
                </div>

                <Typography variant="body1" className="text-xl text-white font-bold">
                    {isSending ? "Thinking..." : "Online"}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}