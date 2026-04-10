import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../infrastructure/product.service';
import { Product } from '../../domain/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (product()) {
      <div class="detail-container">
        <button class="back-link" (click)="goBack()">← Volver</button>
        
        <div class="split-layout">
          <div class="visual-pane">
            <img [src]="product()!.imageSrc" [alt]="product()!.name" class="main-image">
          </div>
          
          <div class="content-pane">
            <div class="info">
              <h1 class="title">{{ product()!.name }}</h1>
              <p class="price">\${{ product()!.price }} USD</p>
              
              <div class="separator"></div>
              
              <div class="description-block">
                <p class="description">{{ product()!.description }}</p>
                <div class="details-list">
                  <span>• 100% Premium Cotton</span>
                  <span>• Designed in Italy</span>
                  <span>• Free Worldwide Shipping</span>
                </div>
              </div>

              <div class="actions">
                <button class="buy-btn">AÑADIR A LA BOLSA</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  private productId = this.route.snapshot.paramMap.get('id');

  product = computed(() => {
    const products = this.productService.products();
    return products.find((p: Product) => p.id === this.productId);
  });

  goBack() {
    this.router.navigate(['/']);
  }
}
