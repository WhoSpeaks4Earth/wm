import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://api.wunderground.com/api/819c0acea464a1dd/conditions/q/GA/Acworth.json';

  constructor(private http: Http) {

  }

  get(endpoint?: string) {

    return this.http.get(this.url);
  }

}
