import { Component, Input } from '@angular/core';
import { ProductModel, urlPhotoProductModel } from '../../shared/model/product.model';

@Component({
    selector: 'img-carousel',
    templateUrl: './img-carousel.component.html',
    styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent {

    @Input()
    urlPaths: Array<urlPhotoProductModel>;

    constructor() {
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }


}