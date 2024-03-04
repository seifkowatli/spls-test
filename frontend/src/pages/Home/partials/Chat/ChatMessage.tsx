import { Chip, Stack, Theme, Typography } from "@mui/material"
import { FC } from "react"
import { styles } from "./styles"

export interface ChatMessageProps {
    sender: string
    message: string
    }

const ChatMessage : FC<ChatMessageProps> = ({sender , message}) => {
  return (
    <Stack p={1} gap={1} direction="row">
        <Typography sx={styles.chatSender} variant="subtitle2">{sender} : </Typography>
        <Chip label={message} size="small" />
    </Stack>
  )
}

export default ChatMessage