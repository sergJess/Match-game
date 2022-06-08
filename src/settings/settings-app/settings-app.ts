
export interface applicationSettings {
difficulty: string;
time:	number;
}
export class SettingsApp{
private difficulty: string;
private time: number;

	private settings: applicationSettings = {
		difficulty: 'medium',
	 time: 30
	};

	constructor(difficulty: string, time: number){
		this.difficulty = difficulty;
		this.time = time;
  this.setDifficulty(this.difficulty);
  this.setTime(this.time);
	}

setDifficulty(difficulty: string): void{
	this.settings.difficulty = difficulty;
}

setTime(time: number): void{
	this.settings.time = time;
}

getDifficulty(): string {
	return this.settings.difficulty;
}

getTime(): number {
	return this.settings.time;
}

create( ): applicationSettings{
return this.settings;
}

}

export  const appSettings = new SettingsApp('medium', 30);

