import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { SenderComponent } from './components/sender/sender.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
		InfoComponent,
		HeaderComponent,
		FormComponent,
		TableComponent,
		SenderComponent,
		FooterComponent
  ],
  imports: [
    BrowserModule,
		ReactiveFormsModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
