import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/serves/product.service';
ProductService

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allProduct:any[]=[];

  constructor(private _ProductService:ProductService) { }

  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next:(respones)=>{
        this.allProduct=respones;   },
      error:(error)=>console.log(error)
      
    })
  }

}
