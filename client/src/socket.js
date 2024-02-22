import { io } from "socket.io-client";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const socket = io("https://ig-clone.riefqialviansyah.com", {
  autoConnect: false,
});

export default socket;
