import { app } from "./app";

app.listen(process.env.PORT || 3331, () => console.log("Server is running"));
