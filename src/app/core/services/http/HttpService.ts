/**
 * Created by phuctran on 15/12/2016.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {
    public showCode(): Number {
        let a = 1234561;
        a += 3;
        return a;
    }
}
