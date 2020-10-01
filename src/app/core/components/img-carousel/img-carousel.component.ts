import { Component, HostListener, Input } from '@angular/core';
import { UrlPhotoProductModel } from '../../shared/model/product.model';
import { UrlPhotoSelectedModel } from '../../shared/model/url-photo-selected.model';

@Component({
    selector: 'img-carousel',
    templateUrl: './img-carousel.component.html',
    styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent {

    @HostListener('document:keydown.ArrowLeft', ['$event']) onKeydownHandlerLeft(event: KeyboardEvent) {
        const photoTemp = this.urlPathsSelection.filter(photo => photo.isSelected);
        const i = this.urlPathsSelection.length;
        (photoTemp[0].idPhoto === 1) ? this.selectImg((i)) : this.selectImg((photoTemp[0].idPhoto - 1));
    }

    @HostListener('document:keydown.ArrowRight', ['$event']) onKeydownHandlerRight(event: KeyboardEvent) {
        const photoTemp = this.urlPathsSelection.filter(photo => photo.isSelected);
        const i = this.urlPathsSelection.length;
        (photoTemp[0].idPhoto === (i)) ? this.selectImg(1) : this.selectImg((photoTemp[0].idPhoto + 1));
    }

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
            if (i === 0) {
                this.urlPreview = photo.urlPath;
                isSelected = true;
            }
            return { ...photo, isSelected };
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