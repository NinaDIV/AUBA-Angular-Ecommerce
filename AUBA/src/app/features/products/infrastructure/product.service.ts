import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../domain/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products: WritableSignal<Product[]> = signal([
    {
      id: '1',
      name: "Oversized L'ÉTERNEL Hoodie",
      price: 120,
      description: 'Hoodie premium de alto gramaje con bordados arquitectónicos. El núcleo de la colección AUBA.',
      imageSrc: '/images/hoodie.png',
      deleted: false,
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Essential Cyber-Tee',
      price: 65,
      description: 'Camiseta de algodón orgánico con corte estructurado y detalles reflectantes sutiles.',
      imageSrc: '/images/hoodie.png',
      deleted: false,
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date()
    },
    {
      id: '3',
      name: 'Architectural Cargo Pants',
      price: 180,
      description: 'Pantalones técnicos con silueta disruptiva. Impermeables y transpirables.',
      imageSrc: '/images/hoodie.png',
      deleted: false,
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date()
    },
    {
      id: '4',
      name: 'Monolith Puff Jacket',
      price: 320,
      description: 'Chaqueta acolchada con aislamiento avanzado para temperaturas extremas y estilo minimalista.',
      imageSrc: '/images/hoodie.png',
      deleted: false,
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date()
    },
    {
      id: '5',
      name: 'AUBA Signature Cap',
      price: 45,
      description: 'Gorra de sarga cepillada con el logo AUBA grabado en láser sobre aplique metálico.',
      imageSrc: '/images/hoodie.png',
      deleted: false,
      createdAt: new Date(),
      createdBy: 'system',
      updatedAt: new Date()
    },
    {
      id: '6',
      name: 'Neural Tech-Knit Sweater',
      price: 150,
      description: 'Jersey de punto técnico con patrones generados por IA. Confort térmico inteligente.',
      imageSrc: '/images/hoodie.png',
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
