import { EventEmitter } from "events";
import Websocket from "./libs/WebSocket/Websocket";
import ClientUser from "./libs/Structures/ClientUser";
import Rest from "./libs/Rest/RestManager";

export class Client extends EventEmitter {

    constructor(token: string);

    token: string;

    ws: Websocket;

    readyAt: null;

    user: ClientUser;

    users: Collection;

    channels: Collection;

    guilds: Collection;

    messages: Collection;

    rest: Rest;

    async public connect(): Promise<string>;

    public get uptime(): number;

    public get readyTimestamp(): number;

    public sendMessage(channel: string, data: any): Promise<any>;

    public destroy(): void;

    public on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    public on<S extends string | symbol>(
        event: Exclude<S, keyof ClientEvents>,
        listener: (...args: any[]) => void,
    ): this;

    public once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    public once<S extends string | symbol>(
        event: Exclude<S, keyof ClientEvents>,
        listener: (...args: any[]) => void,
    ): this;

    public emit<K extends keyof ClientEvents>(event: K, ...args: ClientEvents[K]): boolean;
    public emit<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, ...args: any[]): boolean;

    public off<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    public off<S extends string | symbol>(
        event: Exclude<S, keyof ClientEvents>,
        listener: (...args: any[]) => void,
    ): this;

    public removeAllListeners<K extends keyof ClientEvents>(event?: K): this;
    public removeAllListeners<S extends string | symbol>(event?: Exclude<S, keyof ClientEvents>): this;

}

export class Collection<K, V> extends Map {

    constructor();

    public set(key: any, val: any): this;

    public delete(key: any): boolean;

    public get(key: any): any;

    public has(key: any): boolean;

    public clear(): void;

    public array(): any[];

    public keyArray(): any[];

    public first(amount: number): any | Array<any>;

    public firstKey(count?: number): any | Array<any>;

    public last(count?: number): any | Array<any>;

    public lastKey(count?: number): any | Array<any>;

    public random(count?: number): any | Array<any>;

    public randomKey(count?: number): any | Array<any>;

    public findAll(prop: string, value: any): aby[];

    public find(propOrFn: string | Function, value?: any): any;

    public findKey(propOrFn: string | Function, value?: any): any;

    public exists(prop: string, value: any): boolean;

    public sweep(fn: Function, thisArg?: any): number;

    public filter(fn: Function, thisArg?: any): Collection<K, V>;

    public filterArray(fn: Function, thisArg?: any): any[];

    public partition(fn: Function, thisArg?: any): Collection<K, V>[];

    public map(fn: Function, thisArg?: any): any[];

    public some(fn: Function, thisArg?: any): boolean;

    public every(fn: Function, thisArg?: any): boolean;

    public reduce(fn: Function, initialValue?: any): any;

    public tap(fn: Function, thisArg?: any): Collection<K, V>;

    public clone(): Collection;

    public concat(...collections: Collection[]): Collection<K, V>;

    public deleteAll(): Promise<any>[];

    public equals(collection: Collection): boolean;

    public sort(compareFunction?: Function): Collection<K, V>;

}

export class Message {

    constructor(client: Client, data: object);

    private _patch(data: object): Message

    public client: Client;

    public content: string;

    public channelID: string;

    public id: string;

    public type: number;

    public tts: boolean;

    public createdAt: Date;

    public createdTimestamp: number;

    public pinned: boolean;

    public nonce: string;

    public mentions: any;

    public author: User;

    public guildID: string;


}

export class MessageEmbed {

    constructor();

    public setTitle(title: string): MessageEmbed;

    public setURL(url: string): MessageEmbed;

    public setDescription(description: string): MessageEmbed;

    public setImage(imageURL: string): MessageEmbed;

    public setThumbnai(thumbnailURL: string): MessageEmbed;

    public setFooter(text: string, iconURL?: string): MessageEmbed;

    public setTimestmap(timestamp: string): MessageEmbed;

    public setAuthor(name: string, iconURL?: string, url?: string): MessageEmbed;

    public setColor(color: any): MessageEmbed;

    public addField(name: string, value: string, inline?: boolean): MessageEmbed;

    public addBlankField(inline: boolean): MessageEmbed;

}

export class User {

    constructor(client: Client, data: object);

    private _patch(data: object): User;

    public bot: boolean;

    public verified: boolean;

    public id: string;

    public get createdAt(): Date;

    public get createdTimestamp(): number;

    public get defaultAvatarURL(): string;

    public avatatURL(options: object): string;

    public displayAvatarURL(options: object): string;

    public get tag(): string;

    public toString(): string;

}

export const version: string;

interface ClientEvents {
    ready: [];
    messageCreate: [message: Message, guild: Guild];
    messageDelete: [message: Message];
}