import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-entregador',
  templateUrl: './entregador.component.html',
  styleUrls: ['./entregador.component.scss']
})
export class EntregadorComponent {
  panelOpenState = false;

  triggerObservable: Subject<void> = new Subject<void>();
  capturedImage: string | undefined;

  capture(): void {
    this.triggerObservable.next();
  }

  handleImageCapture(image: WebcamImage): void {
    const imageBase64: string = image.imageAsBase64;
    this.capturedImage = imageBase64;
    console.log("IMAGE ",this.capturedImage);
  }

}
