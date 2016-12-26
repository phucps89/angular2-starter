import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { TodolistModule } from './todolist/todolist.module';
import {DemoModule} from './demo/demo.module';
import {HttpService} from './core/services/http/HttpService';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        HomeModule,
        TodolistModule,
        routing,
        DemoModule
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders, HttpService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
