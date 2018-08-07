import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponet } from './products/product-list.components';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponet,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
