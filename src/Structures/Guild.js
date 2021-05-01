'use-strict';

class Guild {

    constructor(client, data) {

        this.client = client;
        this._patch(data);

    }

    _patch(data) {

        this.id = data.id || null;
        this.name = data.name || null;

        this.client.guilds.set(this.id, this)

    }

}

module.exports = Guild;