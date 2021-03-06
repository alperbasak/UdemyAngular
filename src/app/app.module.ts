import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {WarningComponent} from './alert/warning.component';
import {SuccessComponent} from './alert/success.component';
import { BindingAsgnmtComponent } from './binding-asgnmt/binding-asgnmt.component';
import { DirectiveAsgnmtComponent } from './directive-asgnmt/directive-asgnmt.component';

@NgModule({
  declarations: [
    // have to tell to the module to look for the component
    AppComponent,
    ServerComponent,
    WarningComponent,
    SuccessComponent,
    ServersComponent,
    BindingAsgnmtComponent,
    DirectiveAsgnmtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
