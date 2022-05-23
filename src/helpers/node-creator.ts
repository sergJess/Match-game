export interface nodeParametrs {
	classList?: Array<string>
	id? :string;
	text?: string;
}
export class NodeCreator {
	private element: HTMLElement;
	private parent: HTMLElement;
	private nodeParams: nodeParametrs;
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs = {}){
		this.element = element;
		this.parent = parent;
		this.nodeParams = nodeParams;
		this.addClassList();
		this.addId();
		this.addText();
		this.parent.append(this.element);
	}

addClassList(): void{
	const classList = this.nodeParams.classList;
	if(classList && classList.length){
		classList.map((item:string) => {
			this.element.classList.add(item);
		});
	}
}

addId(): void{
const id = this.nodeParams.id;
if(id){
	this.element.setAttribute('id', id);
}
}

addText(): void{
	const text = this.nodeParams.text;
	if(text){
		this.element.textContent = text;
	}
}

getElement(): HTMLElement {
	return this.element;
}
removeElement(): void {
	this.element.remove();
}
removeElementContent(): void {
	this.element.innerHTML = '';
}
}