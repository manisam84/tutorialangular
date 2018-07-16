import {Injectable} from '@angular/core'
import {IProduct} from './product'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs'
import {tap, catch} from 'rxjs/operator'
@Injectable({
  providedIn: 'root'
})
export class ProductService{
private productUrl = 'api/products/products.json';

constructor(private http : HttpClient){}
getProducts(): Observable<IProduct[]>{
  // return  this.http.get<IProduct[]>(this.productUrl).pipe(
  //   tap(data=> console.log('ALL' + JSON.stringify(data))),
  //   catchError(this.handleError);
  // );
  return  this.http.get<IProduct[]>(this.productUrl);
}

private handleError(err: HttpErrorResponse)
return;
}
