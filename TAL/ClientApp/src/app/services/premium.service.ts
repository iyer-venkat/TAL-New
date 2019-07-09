import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';


import { HttpHelperService } from '../core/http-helper.service';
import { Client } from '../models/client.model';

@Injectable()
export class PremiumService {
    constructor(private httpHelperService: HttpHelperService) {

    }

    calculatePremium(client: Client) {
        return this.httpHelperService.post('api/premium/calculate', client);
    }
}