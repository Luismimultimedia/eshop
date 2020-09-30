import { Component, Input } from '@angular/core';
import { UrlPhotoProductModel } from '../../shared/model/product.model';
import { UrlPhotoSelectedModel } from '../../shared/model/url-photo-selected.model';

@Component({
    selector: 'img-carousel',
    templateUrl: './img-carousel.component.html',
    styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent {

    @Input()
    urlPaths: Array<UrlPhotoProductModel>;
    urlPathsSelection: Array<UrlPhotoSelectedModel>;
    urlPreview: string;

    constructor() {
    }

    ngOnInit() {
        const urlPathsTemp = this.urlPaths.map((photo) => photo);
        this.urlPathsSelection = urlPathsTemp.map((photo: UrlPhotoProductModel, i) => {
            let isSelected = false;
            if (i === 0){
                this.urlPreview = photo.urlPath;
                isSelected = true;
            }
            return {...photo, isSelected};
        });
    }

    selectImg(id: number) {
        this.urlPathsSelection = this.urlPathsSelection.map(photo => {
            photo.isSelected = false;
            if (photo.idPhoto === id) {
                this.urlPreview = photo.urlPath;
                photo.isSelected = true;
            }
            return photo;
        });
    }


}