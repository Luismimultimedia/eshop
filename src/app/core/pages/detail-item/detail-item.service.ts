import { Injectable } from '@angular/core';
// import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../shared/model/product.model';

@Injectable({
    providedIn: 'root',
})

export class DetailProductService {

    private dbPath = '/products';

    productsRef: AngularFirestoreCollection<ProductModel> = null;


    constructor(private db: AngularFirestore) {
        this.productsRef = db.collection(this.dbPath);
    }

    getProduct(): AngularFirestoreCollection<ProductModel> {
        return this.productsRef;
    }
}
