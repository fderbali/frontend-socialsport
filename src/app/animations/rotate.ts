import { animate, state, style, transition, trigger } from '@angular/animations';

export let rotate = trigger('rotate', [
	state('void', style({ 'opacity': 0 })),
	transition(':enter', [
		style({ opacity: 0, 'transform': 'rotate(20deg)' }),
		animate(500)
	])
]);
