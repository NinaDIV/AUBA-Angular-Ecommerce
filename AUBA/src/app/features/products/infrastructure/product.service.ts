import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../domain/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products: WritableSignal<Product[]> = signal([
    {
      id: '1',
      name: 'Oversized Black Hoodie',
      price: 89,
      description: 'A premium, oversized black streetwear hoodie crafted from heavy-weight cotton. Minimalist aesthetic for maximum comfort.',
      imageSrc: 'images/hoodie.png',
      deleted: false,
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Essential Graphic T-Shirt',
      price: 45,
      description: 'Signature graphic tee made with organic cotton. Designed for a perfectly draped fit.',
      imageSrc: 'images/hoodie.png', // Reusing the same image to avoid creating too many right now
      deleted: false,
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date()
    },
    {
      id: '3',
      name: 'Techwear Cargo Pants',
      price: 110,
      description: 'Water-resistant, multi-pocket cargo pants with adjustable straps. Built for the urban environment.',
      imageSrc: 'images/hoodie.png',
      deleted: false,
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date()
    }
  ]);

  get products(): WritableSignal<Product[]> {
    return this._products;
  }
}
