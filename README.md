# Reloaded (WIP)

Another NodeJS Discord Library.

---

## Installing Reloaded

To install **Reloaded**, please follow the next steps:

- Create a new NodeJS Project.
- Head to your `package.json` -> `dependencies`.
- Put the following line inside the `dependencies`: `"reloaded": "github:reloadedjs/reloaded#v0.0.1"`.
- Run: `npm install`

Additional Note: If you want a Quick installation: `npm i reloadedjs/reloaded#v0.0.1`

---

# Example

A Simple Ping Pong Command

```js
const Reloaded = require("reloaded");
const client = new Reloaded.Client("TOKEN");

client.on("ready", () => {

    console.log(`${client.user.tag} Is Ready!`);

});

client.on("messageCreate", async (message) => {

    if (message.author.bot) return;

    if (message.content === "!ping") {

        client.sendMessage(message.channelID, "Pong!");

    }

});

client.connect();

```

---

