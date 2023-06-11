import { io } from "socket.io-client";

const socket = io(process.env.NODE_ENV==="developement"? "http://localhost:8080":"https://online-chess-app.onrender.com");

export { socket };
