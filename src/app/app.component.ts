import { Component, ViewChild } from '@angular/core';
import { ResizingCroppingImagesComponent } from 'alyle-ui/resizing-cropping-images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ResizingCroppingImagesComponent) img: ResizingCroppingImagesComponent;
  ngOnInit() {
  }
  uploadFile() {
    let image = {
      name: this.img.img,
      file: this.img.origImg,
      img__thumb: this.img.imgCrop
    };
    console.log('%cIMAGE', 'color:purple;', image)
  }
}
