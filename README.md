# Resizing & cropping images with Angular 2
## Install
 [npm](https://www.npmjs.com/package/angular2-resizing-cropping-image)
 ```bash
# install the repo with npm
 npm install angular2-resizing-cropping-image
 ```
## Example
 ```js
# import
 import { lyResizingCroppingImagesModule } from 'angular2-resizing-cropping-image';
 @NgModule({
     imports : [lyResizingCroppingImagesModule, ...],
 })
 ```
 ```js
 import { Component } from '@angular/core';

 @Component({
   selector: 'image-upload',
   styles: [`
     :host{
       display: block
     }
      `],
    template: `
      <h1>Resizing & cropping images with Angular 2</h1>
      <ly-cropping #Img format="png"></ly-cropping>
      <input (change)="Img.imgChange($event)" type="file">
      <button (click)="Img.zoom('+')">+</button>
      <button (click)="Img.zoom('-')">-</button>
      <button (click)="Img.center()">center</button>
      <div>Format input: {{Img._img.type}}</div>
      <br />
      <div>Format output: {{Img.format}}</div>
     <br />
     <div>Result: </div>
      <br />
      <img [src]="Img.imgCrop">
      <br />
      <input [(ngModel)]="Img.sizeW" placeholder="Img size Width">
      <input [(ngModel)]="Img.sizeH" placeholder="Img size Height">
      <input [(ngModel)]="Img.img" placeholder="Img">
    `
  })
  export class imgUpload {}

  ```
## SS
<img src="https://firebasestorage.googleapis.com/v0/b/head-expeditions.appspot.com/o/img.png?alt=media&token=cab4d571-fce8-4a2a-8cbf-4441c94a637b">

## Contributing
>If you wish to contribute to the project, please send the pull requests to the develop branch. Before submitting any changes, try and test that the changes work with all the support browsers.
