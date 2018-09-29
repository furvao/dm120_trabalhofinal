import { With } from "./with";

export class Dweet {

    private _this:string;
    private _by:string;
    private _the:string;
    private _with: Array<With>;
  getwith: any;

    constructor(_this:string, by:string, the:string, _with:Array<With>){
        this._this = _this;
        this._by = by;
        this._the = the;
        this._with = _with;
    }

    /**
     * Getter this
     * @return {string}
     */
	public getThis(): string {
		return this._this;
	}

    /**
     * Getter by
     * @return {string}
     */
	public getBy(): string {
		return this._by;
	}

    /**
     * Getter the
     * @return {string}
     */
	public getThe(): string {
		return this._the;
	}

    /**
     * Getter with
     * @return {Array<With>}
     */
	public getWith(): Array<With> {
		return this._with;
	}

    /**
     * Setter this
     * @param {string} value
     */
	public setThis(value: string) {
		this._this = value;
	}

    /**
     * Setter by
     * @param {string} value
     */
	public setBy(value: string) {
		this._by = value;
	}

    /**
     * Setter the
     * @param {string} value
     */
	public setThe(value: string) {
		this._the = value;
	}

    /**
     * Setter with
     * @param {Array<With>} value
     */
	public setWith(value: Array<With>) {
		this._with = value;
	}

}
