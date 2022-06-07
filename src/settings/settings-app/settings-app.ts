import {NodeCreator, nodeParametrs} from '../../helpers/node-creator';

interface applicationSettings {
difficulty: string;
time:	number;
}
export class SettingsApp{
	private settings: applicationSettings;
	constructor(settigns:applicationSettings){
		this.settings = settigns;
}

setDifficulty(difficulty: string): void{
	this.settings.difficulty = difficulty;
}
setTime(time: number): void{
	this.settings.time = time;
}
create( ): applicationSettings{
return this.settings;
}
}

export const settingsObject: applicationSettings = {
	difficulty: 'medium',
	time: 30
}