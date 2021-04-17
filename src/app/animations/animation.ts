import { animate, state, style, transition, trigger } from '@angular/animations';

export let translate = trigger('translate', [
	state('void', style({ 'opacity': 0 })),
	transition(':enter', [
		style({ opacity: 0, 'transform': 'translateX(200px)' }),
		animate(500)
	])
]);
