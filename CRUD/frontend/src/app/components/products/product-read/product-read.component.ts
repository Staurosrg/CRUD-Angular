import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product-model';

@Component({
	selector: 'app-product-read',
	templateUrl: './product-read.component.html',
	styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit{

	products: Product[]
	displayedColumns =[	'id','name','price']

	constructor(private productService: ProductService){}
	ngOnInit(): void {
		this.productService.read().subscribe(products =>{
			this.products = products
			console.log(this.products)
		})

	}
}
