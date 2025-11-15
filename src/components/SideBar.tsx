import { Drawer, List, ListItemButton, ListItemText, Typography } from "@mui/material";

export default function Sidebar({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    return (
        <Drawer open={open} onClose={onClose}>
            <div className="w-64 p-4 flex flex-col gap-4 bg-white h-full shadow">
                <Typography variant="h6">Chats</Typography>
                <List>
                    <ListItemButton>
                        <ListItemText primary="New Chat" />
                    </ListItemButton>
                </List>
            </div>
        </Drawer>
    );
}
