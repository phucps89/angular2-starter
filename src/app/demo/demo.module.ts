import { NgModule } from '@angular/core';
import {DemoComponent} from './demo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ],
    imports: [
        FormsModule
    ]
})
export class DemoModule {
}
