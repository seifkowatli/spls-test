import { TitledBox } from "~/components";
import ChatIcon from "~/assets/chat.svg";
import { Box, Stack } from "@mui/material";
import ChatBox from "./ChatBox";
import ChatMessage from "./ChatMessage";
import { styles } from "./styles";

const Chat = () => {
  return (
    // @ts-ignore
    <TitledBox title="Chat" icon={<ChatIcon height={20} width={20} />}>
      <Box height={1}>
        <Box sx={styles.messagesContainer}>
            <ChatMessage sender="CPU1" message="hello" />
            <ChatMessage sender="CPU1" message="hello2" />
            <ChatMessage sender="CPU1" message="hello3" />
            <ChatMessage sender="CPU1" message="hello4" />
            <ChatMessage sender="CPU1" message="hello5" />
            <ChatMessage sender="CPU1" message="hello6" />
        </Box>
        <ChatBox />
      </Box>
    </TitledBox>
  );
};

export default Chat;
