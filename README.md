# Cryptocurrency Converter

> A really simple web app that uses the WebSocket protocol to communicate between the client and the server.  The app allows the user to request the price for some cryptocurrency pairs at the current time. When the user specifies a currency pair, the app will fetch the price from the server using the WebSocket connection and then display the price on the page.  

## Setup

Requires [Node.js](https://nodejs.org/en/).

```bash
# Install app dependencies
$ npm install

# Run the server
$ npm start

# App runs on http://localhost:5000
```

## Notes

* The cryptocompare package is used to pull live prices (which is an average of several cryptocurrency exchanges)
* The socket.io package is used to implement websockets
* The app provides a way for the user to enter a specific value that they want to convert
* If a user wants to get the unit price of a particular currency, they can convert the currency with a value of 1
