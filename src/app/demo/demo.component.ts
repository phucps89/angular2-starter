import {Component, Input} from '@angular/core';
import {HttpService} from '../core/services/http/HttpService';

@Component({
    moduleId: module.id,
    selector : 'as-demo',
    templateUrl : 'demo.html'
})

export class DemoComponent {
    @Input() hoten: string;

    constructor(private httpService: HttpService) {

    }

    getCode() {
        return this.httpService.showCode();
    }
}
