const fs = require("fs");
const express = require("express");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.use(cookieParser());

app.get(/^(\/gallery)?\/(index.html?)?$/, (req, res) => {
    const colorTheme = req.cookies["color-theme"] === "light" ? "light" : "dark";
    console.log(`color-theme: ${colorTheme}`);
    res.send(
        ejs.render(
            fs.readFileSync(
                `${__dirname}${req.params["0"] ? req.params["0"] : ""}/index.html`,
                "utf-8",
            ),
            {
                colorTheme: colorTheme,
            },
        ),
    );
});
app.get("/*", (req, res) => {
    res.sendFile(__dirname + req.originalUrl);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});