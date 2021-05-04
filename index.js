module.exports = {
    Client: require("./lib/Client"),
    ClientUser: require("./lib/Structures/ClientUser"),
    Constants: require("./lib/Constants"),
    Collection: require("./lib/Structures/Collection"),
    Message: require("./lib/Structures/Message"),
    MessageEmbed: require("./lib/Structures/MessageEmbed"),
    Payload: require("./lib/WebSocket/Payload"),
    Presence: require("./lib/Structures/Presence"),
    RestManager: require("./lib/Rest/RestManager"),
    User: require("./lib/Structures/User"),
    WebsocketManager: require("./lib/WebSocket/Websocket"),
    version: require("./package.json").version
};