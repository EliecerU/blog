import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blog:any={}

  constructor( private activatedRoute: ActivatedRoute, private _blogsService:BlogsService ){
    this.activatedRoute.params.subscribe( params => {
      this.blog = this._blogsService.getBlog( params['id'] );
      console.log(this.blog);
    });
  }

}
