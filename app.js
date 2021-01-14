// Express
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
// Port
const port = process.env.PORT || 3000;

// Http Errors
var createError = require("http-errors");
// Path
var path = require("path");

// Routes
var indexRouter = require("./src/routes/index");
// var indexRouter = require("./routes/index");

app.use("/", indexRouter);

// Request a token
app.get("/token", (req, res) => {
	const payload = {
		name: "Jimmy",
		scopes: ["customer:create"],
	};
	const token = jwt.sign(payload, "key");
	res.send(token);
});

// app.get("/", (req, res) => res.send("Hello World!"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`),
);
