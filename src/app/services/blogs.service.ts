import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private blogs:Blog[]=[
    {
      autor: "Eliecer Ureche",
      titulo: " seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "http://c.files.bbci.co.uk/650C/production/_105486852_vialactea3.jpg"
    },
    {
      autor: "Eliecer Ureche",
      titulo: "No seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "http://c.files.bbci.co.uk/650C/production/_105486852_vialactea3.jpg"
    
    },
    {
      autor: "Eliecer Ureche",
      titulo: " seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "http://c.files.bbci.co.uk/650C/production/_105486852_vialactea3.jpg"    
    },
    {
      autor: "Eliecer Ureche",
      titulo: " seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "http://c.files.bbci.co.uk/650C/production/_105486852_vialactea3.jpg"    
    },
    {
      autor: "Eliecer Ureche",
      titulo: " seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "http://c.files.bbci.co.uk/650C/production/_105486852_vialactea3.jpg"    
    }
  ];

  constructor() {
    console.log("Servicio listo para usar");
  }

  getBlogs(){
    return this.blogs;
  }

  getBlog( idx:number ){
    return this.blogs[idx];
  }

  buscarBlogs( termino:string ):Blog[]{
    let blogsArr:Blog[]=[];
    termino = termino.toLowerCase();
    for (const blog of this.blogs) {
      let titulo = blog.titulo.toLowerCase();
      if (titulo.indexOf( termino ) >= 0) {
        blogsArr.push( blog )
      }
    }

    return blogsArr;
  }
}

export interface Blog{
  autor: string;
  titulo:string;
  info: string;
  img: string;
}
