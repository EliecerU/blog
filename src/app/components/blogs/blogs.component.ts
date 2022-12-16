import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blog, BlogsService } from 'src/app/services/blogs.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  blogs:Blog[]=[];

  constructor( private _blogService: BlogsService, private router:Router ){

  }

  ngOnInit(): void {
    this.blogs = this._blogService.getBlogs();
    // console.log(this.blogs);
  }

  buscarBlog( termino:string ){
    this.router.navigate(['/buscar', termino]);
  }
}
