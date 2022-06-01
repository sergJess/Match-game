import {NodeCreator, nodeParametrs} from '../../helpers/node-creator';

interface applicationSettings {
difficulty: string;
time:	number;
}
class SettingsApp extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
}
setDifficulty(difficulty: string){
	
}

create():applicationSettings{
const settings = {};
}
}