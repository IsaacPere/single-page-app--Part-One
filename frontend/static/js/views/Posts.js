import AbstractView from './AbstractView.js';

export default class extends AbstractView{
	constructor(params){
		super(params);
		this.setTitle("Posts");
	}
	async getHtml(){
		return `
		<h1>Welcome to sit back</h1>
		<p>You are viewing the posts</p>`;
	}
}