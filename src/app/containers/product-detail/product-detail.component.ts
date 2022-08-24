import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    // PATH PARAMS : /detail/1000
    this.activeRoute.paramMap.subscribe((params) => {
      console.log('PID', params.get('pid'));
    });
    // QUERY PARAMS : /detail/1000?rating=4&size=med
    this.activeRoute.queryParamMap.subscribe((params) => {
      console.log('RATING', params.get('rating'));
      console.log('SIZE', params.get('size'));
    });
  }

}
