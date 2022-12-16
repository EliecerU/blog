import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-tarjeta',
  templateUrl: './blog-tarjeta.component.html'
})
export class BlogTarjetaComponent implements OnInit{

  @Input() blog:any={};
  @Input() index: any;

  constructor(private router:Router){
 
  }

  ngOnInit(): void {
    
  }

  // verBlog(){
  //   this.router.navigate(['/blog', this.index]);
  //   console.log(this.index)
  // }
  

}
