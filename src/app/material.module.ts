import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatSelectModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatSortModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatRippleModule,
        MatTabsModule,
        MatRadioModule,
        MatListModule,
        MatExpansionModule,
        MatSidenavModule,
        MatMenuModule,
        MatChipsModule,
        MatBadgeModule,
        MatSlideToggleModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatSelectModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatSortModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatRippleModule,
        MatTabsModule,
        MatRadioModule,
        MatListModule,
        MatExpansionModule,
        MatSidenavModule,
        MatMenuModule,
        MatChipsModule,
        MatBadgeModule,
        MatSliderModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatDialogModule
    ],
})
export class MaterialModule {
    constructor(public matIconRegistry: MatIconRegistry) {
        // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }

    static forRoot(): ModuleWithProviders<MaterialModule> {
        return {
            ngModule: MaterialModule,
            providers: [MatIconRegistry]
        };
    }
}
