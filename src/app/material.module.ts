import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatNativeDateModule,
	MatSidenavModule,
	MatToolbarModule,
	MatListModule,
	MatTabsModule,
	MatCardModule,
	MatSelectModule,
	MatProgressSpinnerModule,
	MatDialogModule,
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatTabsModule,
		MatCardModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		MatDialogModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatTabsModule,
		MatCardModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		MatDialogModule
	],
})
export class MaterialModule {}
