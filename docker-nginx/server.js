const express = require("express");
const path = require("path");

const appName = process.env.APP_NAME;

const app = express();
const port = 3000;

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
	console.log(`Request served by node app: index.html - ${appName}`);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port} - ${appName}`);
});
