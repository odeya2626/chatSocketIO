// import React, { createContext, useContext, useEffect, useState } from "react";
// // import { io } from "socket.io-client";
// import socketIO from "socket.io-client";

// const SocketContext = createContext();

// export function useSocket() {
//   useContext(SocketContext);
// }

// export function SocketProvider({ children, id }) {
//   const [socket, setSocket] = useState();

//   setSocket(newSocket);
//   //   useEffect(() => {
//   //     // const newSocket = io("http://localhost:8080");
//   //     const newSocket = socketIO.connect("http://localhost:4000", {
//   //       query: { id },
//   //     });
//   //     setSocket(newSocket);
//   //     return () => newSocket.close();
//   //   }, [id]);
//   console.log(socket);
//   return (
//     <SocketContext.Provider value={socket}>
//       {socket ? children : <div>Loading...</div>}
//     </SocketContext.Provider>
//   );
// }
