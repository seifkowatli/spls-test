// useWebSocket.ts

import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { socketUri } from '~/configs';

interface WebSocketHookOptions {
  eventsToListen?: string[];
}

interface WebSocketHookResult {
  sendMessage: (message: any, eventToSend : string) => void;
  receivedData: any;
}

const useWebSocket = ({
  eventsToListen,
}: WebSocketHookOptions = {}): WebSocketHookResult => {
  const url = socketUri;

  const [socket, setSocket] = useState<Socket | null>(null);
  const [receivedData, setReceivedData] = useState<any>(null);

  useEffect(() => {
    const newSocket = io(url);

    setSocket(newSocket);
    console.log('socket connected')
    return () => {
      newSocket.disconnect();
    };
  }, [url]);

  const sendMessage = (message: any, eventToSend: string): void => {
    if (socket) {
      socket.emit(eventToSend, message );
    }
  };

  useEffect(() => {
    if (socket && eventsToListen) {
      eventsToListen.forEach((event) => {
        socket.on(event, (data) => {
          setReceivedData(data);
        });
      });
    }

    return () => {
      if (socket && eventsToListen) {
        eventsToListen.forEach((event) => {
          socket.off(event);
        });
      }
    };
  }, [socket, eventsToListen]);

  return { sendMessage, receivedData };
};

export default useWebSocket;
