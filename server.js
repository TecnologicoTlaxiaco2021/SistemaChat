import server from "./app/socket.js";
import "./routes/discuss.js";

server.listen(process.env.PORT || 80);