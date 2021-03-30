import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]

})
export class AppModule { 
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    if (!customElements.get('micro-three')) {
      customElements.define('micro-three', el);
    }
  }

  ngDoBootstrap() {}

}
