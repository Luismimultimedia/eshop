import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ColorProductModel, FeaturesProductModel, ProductModel, SpecificationFeaturesModel, SpecificationsProductModel, UrlPhotoProductModel, WarrantyProductModel } from '../../shared/model/product.model';
import { DetailProductService } from './detail-item.service';

@Component({
  selector: 'detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent {

  product: ProductModel;
  products: any;
  urlPaths: Array<UrlPhotoProductModel>;
  specificationFeatures: Array<SpecificationFeaturesModel>;
  colorOptions: Array<ColorProductModel>
  warrantyOptions: Array<WarrantyProductModel>;
  featuresOptions: Array<FeaturesProductModel>;
  specification: Array<SpecificationsProductModel>;
  readOption: any = {
    isOverview: true,
    isFeature: false,
    isBox: false,
  };
  total: number;
  tabContent: string;
  extraPriceColor = 0;
  extraPriceWarranty = 0;
  extraPriceFeature = 0;


  constructor(private detailProductService: DetailProductService) {
    // this.initProduct();
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.detailProductService.getProduct().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(product => {
      this.product = product[0];
      this.urlPaths = this.product.urlPhoto;
      this.specificationFeatures = this.product.specificationFeatures;
      this.tabContent = this.product.overview;
      this.colorOptions = this.product.colorOptions;
      this.warrantyOptions = this.product.warrantyOptions;
      this.featuresOptions = this.product.featuresOptions;
      this.specification = this.product.specification;
      this.total = Number(this.product.price);
    });
  }

  selectReadSpecification(spec: string) {
    switch (spec) {
      case 'overview':
        this.readOption = { isOverview: true, isFeature: false, isBox: false };
        this.tabContent = this.product.overview;
        break;
      case 'feature':
        this.readOption = { isOverview: false, isFeature: true, isBox: false };
        this.tabContent = this.product.features;
        break;
      case 'box':
        this.readOption = { isOverview: false, isFeature: false, isBox: true };
        this.tabContent = this.product.containt;
        break;
    }
  }

  getExtraPrice(data) {
    switch (data.name) {
      case 'color':
        if (this.extraPriceColor !== data.extraPrice) {
          this.total -= this.extraPriceColor;
          this.total += data.extraPrice;
          this.extraPriceColor = data.extraPrice;
        }
        break;
      case 'warranty':
        if (this.extraPriceWarranty !== data.extraPrice) {
          this.total -= this.extraPriceWarranty;
          this.total += data.extraPrice;
          this.extraPriceWarranty = data.extraPrice;
        }
        break;
      case 'features':
        if (this.extraPriceFeature !== data.extraPrice) {
          this.total -= this.extraPriceFeature;
          this.total += data.extraPrice;
          this.extraPriceFeature = data.extraPrice;
        }
        break;
    }
  }

  initProduct() {
    this.product = {
      key: 'key',
      idPorduct: 1,
      new: true,
      nameProduct: 'Momentum True Wireless 2',
      subNameProduct: 'Earbuds that put sound first',
      price: 295.95,
      overview: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.',
      features: 'From classical to contemporary, every music genre is enhanced by the bespoke 7 mm dynamic drivers  of the new MOMENTUM True Wireless 2 earbuds thanks to its deep bass, natural mids and clear, detailed treble. Plus, you can now tailor your listening experience with built-in equalizers and enjoy amazing sound quality on your terms.',
      containt: 'Charging Case, MTW2 Earbuds, Silicone Ear Adapter Sets (In Size XS, S, M, L), USB-A to USB-C Charging Cable.',
      colorOptions: [
        {
          idColor: 1,
          title: 'Ivory White',
          description: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.',
          colorPrice: 0
        },
        {
          idColor: 2,
          title: 'Matte Black',
          description: 'Of all og the celestial bodies that capture out attention and fascination as astronomers.',
          colorPrice: 0
        }
      ],
      warrantyOptions: [
        {
          idWarranty: 1,
          title: '2 years coverage',
          description: 'For the past 75 years, Sennheiser has put sound first.',
          priceWarranty: 0
        },
        {
          idWarranty: 2,
          title: '3 years coverage',
          description: 'For the past 75 years, Sennheiser has put sound first.',
          priceWarranty: 75
        }
      ],
      featuresOptions: [
        {
          idFeatures: 1,
          title: 'Voice Assistant support',
          priceFeature: 0
        },
        {
          idFeatures: 2,
          title: 'customizable controls',
          priceFeature: 25
        }
      ],
      specification: [
        {
          idSpecifications: 1,
          title: 'Dimensions',
          description: '76.8 x 43.8 x 34.7 mm (earbugs and charging case)'
        },
        {
          idSpecifications: 2,
          title: 'USB Standard',
          description: 'USB-C'
        },
        {
          idSpecifications: 3,
          title: 'Power Supply',
          description: 'Sennheiser 7mm dynamic driver'
        },
        {
          idSpecifications: 4,
          title: 'Frecuency response (Microphone)',
          description: '100 Hz to 10 kHz'
        },
        {
          idSpecifications: 5,
          title: 'Fecuency Response',
          description: '5 - 21,000 Hz'
        },
        {
          idSpecifications: 6,
          title: 'Noise cancellation',
          description: 'Single-Mic ANC per earbud side'
        }
      ],
      urlPhoto: [
        {
          idPhoto: 1,
          urlPath: '../../../../assets/img/momentum.png'
        },
        {
          idPhoto: 2,
          urlPath: '../../../../assets/img/earphones.png'
        },
        {
          idPhoto: 3,
          urlPath: '../../../../assets/img/momentumtech.png'
        }
      ],
      specificationFeatures: [
        {
          idSpecificationFeature: 1,
          urlPath: '../../../../assets/icon/touch.svg',
          description: 'Customizable Touch Controls'
        },
        {
          idSpecificationFeature: 2,
          urlPath: '../../../../assets/icon/equalizer.svg',
          description: 'Built-in Equalizer'
        },
        {
          idSpecificationFeature: 3,
          urlPath: '../../../../assets/icon/noise.svg',
          description: 'Active Noise Cancellation'
        }
      ]
    };
  }

}