import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { ImageService } from 'src/app/services/shared/image.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
})
export class PaginaInicialComponent {
  
  constructor(private imageService: ImageService) {
    imageService.imagesLoading$.pipe(filter((r) => r === 0)).subscribe((_) => {
      console.log('all images loaded');
    });
  }
}
