interface attributesParams{
	name: string;
	value: string;
}
export interface nodeParametrs {
	classList?: Array<string>
	id? :string;
	text?: string;
	attributes?: Array<attributesParams>
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
		this.addAttributes();
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
addAttributes():void {
	if(this.nodeParams.attributes?.length){
		this.nodeParams.attributes.map((item: attributesParams) => {
			this.element.setAttribute(item.name, item.value);
		});
	}
}
getParent(): HTMLElement {
return this.parent;
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
setOnclick(handler: Function): void{
	this.element.onclick = ()=>{
		handler();
	}
}
}