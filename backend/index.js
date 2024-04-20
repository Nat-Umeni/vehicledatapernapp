const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const LocalStrategy = require("passport-local").Strategy;


const PORT = process.env.PORT || "5000"

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.listen(PORT, ()=> {
    console.log(`Now listening on port ${PORT}`)
})