import { Theme } from "@mui/material";

export const styles = {
  chatBox: {
    backgroundColor: (theme: Theme) => theme.palette.grey[800],
    p: 1,
    gap: 2,
  },
  messageInput: {
    width: 1,
    backgroundColor: (theme: Theme) => theme.palette.grey[900],
    borderRadius: 2,
    p: 0.6,
  },
  chatButton: {
    borderRadius: 2,
    fontSize: "1.1rem",
    py: 0.4,
    minWidth: 150,
    px: 3,
    background: (theme: Theme) => theme.gradients.light,
  },
  chatSender: {
    backgroundImage: (theme: Theme) => theme.gradients.light,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight : "bold",
  },
  messagesContainer: { 
    height : 110, 
    overflow : "auto",
    justifyContent : "flex-end"
  }
};
