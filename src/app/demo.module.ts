import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DemoComponent } from './demo.component';
import { MasonryLayoutComponent } from './masonry-layout/masonry-layout.component';

@NgModule({
  declarations: [
    DemoComponent,
    MasonryLayoutComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DemoComponent] 
})
export class DemoModule { }
