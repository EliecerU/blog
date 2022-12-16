import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog, BlogsService } from 'src/app/services/blogs.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit{

  blogs:Blog[]=[];
  termino:string='';

  constructor( private activateRoute: ActivatedRoute, private _blogsService: BlogsService ){

  }

  ngOnInit(){
    this.activateRoute.params.subscribe( params =>{
      this.blogs = this._blogsService.buscarBlogs( params['termino'] );
      this.termino = params['termino'];
    } )
  }
}
