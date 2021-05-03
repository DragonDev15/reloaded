module.exports = {
    Client: require("./src/Client"),
    ClientUser: require("./src/Structures/ClientUser"),
    Constants: require("./src/Constants"),
    Collection: require("./src/Structures/Collection"),
    Message: require("./src/Structures/Message"),
    MessageEmbed: require("./src/Structures/MessageEmbed"),
    Payload: require("./src/WebSocket/Payload"),
    Presence: require("./src/Structures/Presence"),
    RestManager: require("./src/Rest/RestManager"),
    User: require("./src/Structures/User"),
    WebsocketManager: require("./src/WebSocket/Websocket"),
    version: require("./package.json").version
};