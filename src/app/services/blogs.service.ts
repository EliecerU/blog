import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private blogs:Blog[]=[
    {
      autor: "Eliecer Ureche",
      titulo: "No seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "https://steamuserimages-a.akamaihd.net/ugc/1858304668125263960/ADBE89E89C151A6078BB357099E56519537FD712/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    },
    {
      autor: "Eliecer Ureche",
      titulo: "No seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "https://steamuserimages-a.akamaihd.net/ugc/1858304668125263960/ADBE89E89C151A6078BB357099E56519537FD712/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    
    },
    {
      autor: "Eliecer Ureche",
      titulo: "No seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "https://steamuserimages-a.akamaihd.net/ugc/1858304668125263960/ADBE89E89C151A6078BB357099E56519537FD712/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    
    },
    {
      autor: "Eliecer Ureche",
      titulo: "No seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "https://steamuserimages-a.akamaihd.net/ugc/1858304668125263960/ADBE89E89C151A6078BB357099E56519537FD712/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    
    },
    {
      autor: "Eliecer Ureche",
      titulo: "No seas carenalga",
      info: "Lorem Ipsum is simply dummy text of the printing " +
      "and typesetting industry. Lorem Ipsum has been the industry's" +
      "standard dummy text ever since the 1500s, when an unknown "+
      "printer took a galley of type and scrambled it to make a type "+
      "specimen book. ",
      img: "https://steamuserimages-a.akamaihd.net/ugc/1858304668125263960/ADBE89E89C151A6078BB357099E56519537FD712/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    
    }
  ];

  constructor() {
    console.log("Servicio listo para usar");
  }

  getBlogs(){
    return this.blogs;
  }
}

export interface Blog{
  autor: string;
  titulo:string;
  info: string;
  img: string;
}
