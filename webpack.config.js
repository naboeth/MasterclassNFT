const webpack = require('webpack')

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + "/build/app/js",
        filename: "app.js"
    },
};