import { Box } from "@mui/material";
import ChatIcon from "~/assets/chat.svg";
import { TitledBox } from "~/components";
import ChatBox from "./ChatBox";
import ChatMessage from "./ChatMessage";
import { styles } from "./styles";
import useWebSocket from "~/hooks/utils/useWebSocket";
import { GatewayKeys } from "~/configs";
import { useEffect, useState } from "react";


export interface ChatMessageEntry { 
  sender : string;
  message : string;
}

const Chat = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessageEntry[]>([])
  const {receivedData :receivedMessage  } = useWebSocket({eventsToListen : [GatewayKeys.chat]})
  
  useEffect(() => {
    console.log('receivedMessage' , receivedMessage)
    if(receivedMessage) { 
      setChatMessages((prev) => [
        ...prev,
        receivedMessage
      ])
    }
  
  }, [receivedMessage])
  

  return (
    // @ts-ignore
    <TitledBox title="Chat" icon={<ChatIcon height={20} width={20} />}>
      <Box height={1}>
        <Box sx={styles.messagesContainer}>
          {chatMessages.map((entry, index) => (
            <ChatMessage
              key={index}
              sender={entry.sender}
              message={entry.message}
            />
          ))}
        </Box>
        <ChatBox />
      </Box>
    </TitledBox>
  );
};

export default Chat;
