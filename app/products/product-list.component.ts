import { Component,OnInit } from '@angular/core';
import { IProduct} from "./product";
import { ProductService} from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html' //,
  //styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit{
// private _productService;
  constructor(private productService : ProductService){
    // this._productService = productService;
   }
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string ;
  errorMessage: string;
  filteredProducts : IProduct[];
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter? this.performFilter(this.listFilter): this.products;
  }
performFilter(value:string):IProduct[]{
  value = value.toLocaleLowerCase();
  return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(value)!==-1)
}
  products: IProduct[];
 ngOnInit(): void {
   console.log ("product list Initiailisation");
   //this.products=this.productService.getProducts();
     this.productService.getProducts().subscribe(
        products => {
          this.products = products;          
          this.filteredProducts = this.products;
        },
          error => this.errorMessage =<any> error
        );
 }
 OnRatingClicked(message:string) : void
 {
this.pageTitle = 'Product Clicked' + message;
 }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
