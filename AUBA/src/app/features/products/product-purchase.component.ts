import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-purchase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-purchase-container">
      <div class="product-image">
        <img [src]="productImage" [alt]="productName" />
      </div>
      
      <div class="product-details">
        <h2 class="product-name">{{ productName }}</h2>
        <p class="product-description">{{ productDescription }}</p>
        
        <div class="product-specs">
          <div class="spec-item" *ngFor="let spec of specifications">
            <span class="spec-label">{{ spec.label }}:</span>
            <span class="spec-value">{{ spec.value }}</span>
          </div>
        </div>
        
        <div class="price-section">
          <span class="price-label">Precio:</span>
          <span class="price-amount">{{ price | currency:'USD':'symbol':'1.2-2' }}</span>
        </div>
        
        <button class="purchase-button" (click)="onPurchase()">
          Comprar Ahora
        </button>
      </div>
    </div>
  `,
  styles: [`
    .product-purchase-container {
      display: flex;
      gap: 2rem;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .product-image {
      flex: 1;
      max-width: 500px;
    }

    .product-image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      object-fit: cover;
    }

    .product-details {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .product-name {
      font-size: 2rem;
      font-weight: bold;
      color: #333;
      margin: 0;
    }

    .product-description {
      font-size: 1rem;
      color: #666;
      line-height: 1.6;
    }

    .product-specs {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      background: #f9f9f9;
      border-radius: 6px;
    }

    .spec-item {
      display: flex;
      justify-content: space-between;
    }

    .spec-label {
      font-weight: 600;
      color: #555;
    }

    .spec-value {
      color: #777;
    }

    .price-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: #f0f8ff;
      border-radius: 6px;
    }

    .price-label {
      font-size: 1.2rem;
      font-weight: 600;
      color: #333;
    }

    .price-amount {
      font-size: 2rem;
      font-weight: bold;
      color: #007bff;
    }

    .purchase-button {
      padding: 1rem 2rem;
      font-size: 1.1rem;
      font-weight: bold;
      color: #fff;
      background: #28a745;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .purchase-button:hover {
      background: #218838;
    }

    @media (max-width: 768px) {
      .product-purchase-container {
        flex-direction: column;
      }

      .product-image {
        max-width: 100%;
      }
    }
  `]
})
export class ProductPurchaseComponent {
  @Input() productName: string = 'Producto Premium';
  @Input() productDescription: string = 'Descripción detallada del producto con todas sus características y beneficios.';
  @Input() productImage: string = '/images/product-placeholder.jpg';
  @Input() price: number = 99.99;
  @Input() specifications: Array<{label: string, value: string}> = [
    { label: 'Material', value: 'Acero inoxidable' },
    { label: 'Dimensiones', value: '30 x 20 x 10 cm' },
    { label: 'Peso', value: '2.5 kg' },
    { label: 'Garantía', value: '2 años' }
  ];

  onPurchase() {
    console.log('Iniciando compra de:', this.productName);
    // Aquí iría la lógica de compra
  }
}
