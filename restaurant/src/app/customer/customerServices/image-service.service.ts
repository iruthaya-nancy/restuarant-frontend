import { Injectable } from '@angular/core';

@Injectable()
export class ImageServiceService {
  allImages: any[] = [];    
    
    getImages() {    
        return this.allImages = image.slice(0);    
    }    
    
    getImage(id: number) {    
        return image.slice(0).find(Images => Images.id == id)    
    }

}    
const image = [
  {"id":1,"name":"burger","url":"assets/images/burger.jpg"},
  {"id":2,"name":"pizza","url":"assets/images/pizza.jpg"}
]

