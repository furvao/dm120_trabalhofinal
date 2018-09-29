import { Content } from './content';

export class With{
    private _thing: string;
    private _created: string;
    private _content: Content;
    private _date: string;
    private _time: string;


	constructor(thing:string, created:string, content:Content, date:string, time:string) {
        this._thing = thing;
        this._created = created;
        this._content = content;
        this._date = date;
        this._time = time;
    
    }

    /**
     * Getter thing
     * @return {string}
     */
	public getThing(): string {
		return this._thing;
	}

    /**
     * Getter created
     * @return {string}
     */
	public getCreated(): string {
		return this._created;
	}

    /**
     * Getter content
     * @return {Content}
     */
	public getContent(): Content {
		return this._content;
	}

    /**
     * Getter date
     * @return {string}
     */
	public getDate(): string {
		return this._date;
	}

    /**
     * Getter time
     * @return {string}
     */
	public getTime(): string {
		return this._time;
	}

    /**
     * Setter thing
     * @param {string} value
     */
	public setThing(value: string) {
		this._thing = value;
	}

    /**
     * Setter created
     * @param {string} value
     */
	public setCreated(value: string) {
		this._created = value;
	}

    /**
     * Setter content
     * @param {Content} value
     */
	public setContent(value: Content) {
		this._content = value;
	}

    /**
     * Setter date
     * @param {string} value
     */
	public setDate(value: string) {
		this._date = value;
	}

    /**
     * Setter time
     * @param {string} value
     */
	public setTime(value: string) {
		this._time = value;
	}
    
}