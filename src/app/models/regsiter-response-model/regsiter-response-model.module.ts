import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class RegsiterResponseModelModule {
	success: boolean = false;
	message: string = "";
	insert_id: number = 0;
}


