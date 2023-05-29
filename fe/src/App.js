import Login from "./components/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
import { ContactsProvider } from "./contexts/ContactsContext";
import { ConversationsProvider } from "./contexts/ConversationsContext";
import { SocketProvider } from "./contexts/SocketContext";
import socketIO from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useLocalStorage("id");
  const [socket, setSocket] = useState();
  useEffect(() => {
    // const newSocket = io("http://localhost:8080");
    const newSocket = socketIO.connect("http://localhost:4000", {
      query: { id },
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [id]);
  console.log(socket);
  const dashboard = (
    // <SocketProvider id={id}>
    <ContactsProvider>
      <ConversationsProvider id={id} socket={socket}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
    // </SocketProvider>
  );

  return <>{id ? dashboard : <Login setId={setId} />}</>;
}

export default App;
