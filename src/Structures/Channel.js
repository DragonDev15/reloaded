'use-strict';

class Channel {

    constructor(client, data) {

        this.client = client;
        this._patch(data);

    }

    _patch(data) {

        this.id = data.id

    }

}

module.exports = Channel;