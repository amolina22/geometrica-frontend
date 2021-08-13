import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ApiService } from './services/api.service';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { GeometriaComponent } from './components/geometria/geometria.component';
import { FiguraDialogComponent } from './components/figura-dialog/figura-dialog.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    GeometriaComponent,
    FiguraDialogComponent,
    ToolbarComponent,
    ConfirmDialogComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [
    ConfirmDialogComponent,
    FiguraDialogComponent,
  ],
  providers: [
    ApiService,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
