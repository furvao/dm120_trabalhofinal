export class Content {

    private temperatura: string = '0';
    private luminous:string = '0';
    private pressedButton:boolean = false;
    private pressedTouch:boolean = false;
    private alert:string = '';

    constructor(temperatura:string, luminous:string, pressedButton:boolean, pressedTouch:boolean, alert:string){
        this.temperatura = temperatura;
        this.luminous = luminous;
        this.pressedButton = pressedButton;
        this.pressedTouch = pressedTouch;
        this.alert = alert;
    }

    public getTemperatura():string {
        return this.temperatura;
    }

    public setTemperatura(temperatura:string){
        this.temperatura = temperatura;
    }

    public getLuminous():string{
        return this.luminous;
    }
    public setLuminous(luminous:string){
        this.luminous = luminous;
    }

    public getAlert():string{
        return this.alert;
    }
    public setAlert(alert:string){
        this.alert = alert;
    }


    /**
     * Getter $pressedButton
     * @return {boolean }
     */
	public getPressedButton(): boolean  {
		return this.pressedButton;
	}

    /**
     * Setter $pressedButton
     * @param {boolean } value
     */
	public setPressedButton(value: boolean ) {
		this.pressedButton = value;
    }
    
    /**
     * Getter $pressedTouch
     * @return {boolean }
     */
	public getPressedTouch(): boolean  {
		return this.pressedTouch;
	}

    /**
     * Setter $pressedTouch
     * @param {boolean } value
     */
	public setPressedTouch(value: boolean ) {
		this.pressedTouch = value;
	}
    
}