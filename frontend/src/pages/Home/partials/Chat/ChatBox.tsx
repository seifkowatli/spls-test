import { ButtonBase, InputBase, Stack } from "@mui/material"
import { styles } from "./styles"
import useWebSocket from "~/hooks/utils/useWebSocket"
import { useState } from "react"
import { useAppState } from "~/providers"
import { GatewayKeys } from "~/configs"



const ChatBox = () => {
  const [message, setMessage] = useState<string>('')
  const {sendMessage} = useWebSocket()
  const {appState} = useAppState()

  const onSend = () => {
    if(message.length > 1 && appState.isAuthenticated) {
      sendMessage({
        sender : appState.user?.name,
        message,
      }, GatewayKeys.chat)
      setMessage('')
    }
  }
  
  return (
    <Stack sx={styles.chatBox} direction="row">
        <InputBase value={message} onChange={(e) => setMessage(e.target.value)} sx={styles.messageInput}  />
        <ButtonBase onClick={onSend} sx={styles.chatButton}> Start </ButtonBase>
    </Stack>
  )
}

export default ChatBox