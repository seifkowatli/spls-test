import { ButtonBase, InputBase, Stack } from "@mui/material"
import { styles } from "./styles"

const ChatBox = () => {
    
  return (
    <Stack sx={styles.chatBox} direction="row">
        <InputBase sx={styles.messageInput}  />
        <ButtonBase sx={styles.chatButton}> Start </ButtonBase>
    </Stack>
  )
}

export default ChatBox