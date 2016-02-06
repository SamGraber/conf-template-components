import {
	Component, Input, TemplateRef,
	Host, Optional, Inject, forwardRef
} from 'angular2/core';

import { CardList } from '../card-list.ts';
import { RenderTemplate } from '../../render-template/render-template';

import template from './card.html!text';
import css from './card.css!text';

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

	private _cardList : CardList;

	constructor(
		// Make card list optional
		@Optional() @Host()
		// Forward reference injection of card list type because card list is defined first
		@Inject(forwardRef(() => CardList))
		cardList: CardList) {
		this._cardList = cardList;
	}

	showBody: boolean = false;

	// Toggle the display of the body content
	toggleContent() {
		if (this.showBody) {
			this.close();
		} else {
			this.open();
		}
	}

	open() {
		if (this._cardList) {
			this._cardList.collapseAll();
		}

		this.showBody = true;
	}

	close() {
		this.showBody = false;
	}
}
