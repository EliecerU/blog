import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-tarjeta',
  templateUrl: './blog-tarjeta.component.html'
})
export class BlogTarjetaComponent implements OnInit{

  @Input() blog:any={};
  @Input() index: any;

  @Output() blogSeleccionado: EventEmitter<number>;

  constructor(private router:Router){
    this.blogSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  verBlog(){
    // this.router.navigate(['/blog', this.index]);
    // console.log(this.index)
    this.blogSeleccionado.emit( this.index );
  }
  

}
