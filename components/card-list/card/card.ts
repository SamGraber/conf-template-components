import { Component, Input, TemplateRef } from 'angular2/core';

import template from './card.html!text';
import css from './card.css!text';

import { RenderTemplate } from '../../render-template/render-template';

@Component({
	selector: 'conf-card',
	template: template,
	directives: [RenderTemplate],
	styles: [css],
})
export class Card {
	// Template for rendering the card header
	@Input('headTemplate')
	head: TemplateRef;

	// Template for rendering the card body
	@Input('bodyTemplate')
	body: TemplateRef;

	// Data model for card
	@Input()
	card: any;

	showBody: boolean = false;

	// Toggle the display of the body content
	toggleContent() {
		this.showBody = !this.showBody;
	}
}
