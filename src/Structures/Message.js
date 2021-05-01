const User = require("./User");
const Guild = require("./Guild");
const Channel = require("./Channel");

class Message extends Guild {

    constructor(client, data) {
            super(client, data);

        this.client = client
        this._patch(data);
    }

    _patch(data) {
        this.id = data.id || null;
        this.type = data.type || 0;
        this.tts = !!data.tts;
        this.createdTimestamp = data.timestamp ? new Date(data.timestamp).getTime() : null;
        this.pinned = !!data.pinned;
        this.nonce = data.nonce || null;
        this.mentions = data.mentions || null;
        this.mentionedRoles = data.mention_roles || null;
        this.mentionedEveryone = !!data.mention_everyone;
        this.member = data.member || null;
        this.flags = data.flags || 0;
        this.embeds = data.embeds || [];
        this.editedTimestamp = data.edited_timestamp || null;
        this.editedAt = data.edited_timestamp ? new Date(data.edited_timestamp) : null;
        this.content = data.content || null;
        this.channelID = data.channel_id || null;
        this.channel = data.channel ? this.client.channels.get(data.channel.id) ? this.client.channels.get(data.channel.id) : new Channel(this.client, data.channel): null;
        this.author = data.author ? this.client.users.get(data.author.id) ? this.client.users.get(data.author.id) : new User(this.client, data.author) : null;
        this.attachments = data.attachments || [];
        this.guildID = data.guild_id || null;
        this.guild = data.guild ? this.client.guilds.get(data.guild.id) ? this.client.guilds.get(data.guild.id) : new Guild(this.client, data.guild) : null;

        this.client.messages.set(this.id, this);
    }

}

module.exports = Message;