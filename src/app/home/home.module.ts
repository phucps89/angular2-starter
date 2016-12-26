import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { DemoModule } from '../demo/demo.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        DemoModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
