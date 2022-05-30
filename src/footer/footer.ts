import './footer.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';

export default class Footer extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
}
render():void {
	const footerInner = new NodeCreator(this.getElement(), document.createElement('div'), {
		classList:['footer-inner']
	}).getElement();
const yearCreate = new NodeCreator(footerInner, document.createElement('p'), {
	classList: ['footer-year'],
	text: '2022'
});

const linkGithubInner = new NodeCreator(footerInner, document.createElement('div'), {
	classList:['footer-link-inner']
}).getElement();
const linkGithub = new NodeCreator(linkGithubInner, document.createElement('a'), {
	classList:['footer-link'],
	text: 'Github',
	attributes: [{name: 'href', value: 'https://github.com'}]
}).getElement();
}
}