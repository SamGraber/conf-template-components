import {
	Component, Input,
	ContentChild, ViewChildren, QueryList
} from 'angular2/core';

import template from './card-list.html!text';

import { CardHeader } from './header/card-header';
import { CardBody } from './body/card-body';
import { Card } from './card/card';

export { CardHeader, CardBody };

@Component({
	selector: 'conf-card-list',
	template: template,
	directives: [Card],
})
export class CardList {
	@Input()
	source: any[];

	@ContentChild(CardHeader)
	head: CardHeader;

	@ContentChild(CardBody)
	body: CardBody;

	@ViewChildren(Card)
	cards: QueryList<Card>;

	collapseAll() {
		this.cards.map((card: Card) => card.close());
	}
}
