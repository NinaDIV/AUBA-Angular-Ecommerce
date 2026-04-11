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
        <div class="top-nav">
           <button class="back-link" (click)="goBack()">← Volver</button>
           <span class="breadcrumb">Colección / {{ product()!.name }}</span>
        </div>
        
        <div class="split-layout">
          <div class="visual-pane">
            <div class="view-switcher">
               <button [class.active]="viewMode === 'image'" (click)="viewMode = 'image'">FOTO</button>
               <button [class.active]="viewMode === '3d'" (click)="viewMode = '3d'">VISTA 3D</button>
            </div>

            <div class="visual-content">
              @if (viewMode === 'image') {
                <img [src]="product()!.imageSrc" [alt]="product()!.name" class="main-image animate-fade">
              } @else {
                <div class="viewer-3d-placeholder animate-fade">
                   <div class="mesh-overlay"></div>
                   <img [src]="product()!.imageSrc" class="ghost-image">
                   <div class="controls-hint">Usa el ratón para rotar 360°</div>
                   <div class="ai-status">MESHY-AI: Engine Ready</div>
                </div>
              }
            </div>
          </div>
          
          <div class="content-pane">
            <div class="info">
              <div class="brand-line">AUBA DIGITAL LUXURY</div>
              <h1 class="title">{{ product()!.name }}</h1>
              <p class="price">{{ product()!.price | currency:'USD' }}</p>
              
              <div class="options-section">
                <div class="option-header">
                  <span>SELECCIONAR TALLA</span>
                  <button class="size-guide">GUÍA DE TALLAS</button>
                </div>
                <div class="size-grid">
                  @for (size of ['S', 'M', 'L', 'XL']; track size) {
                    <button 
                      class="size-btn" 
                      [class.selected]="selectedSize === size"
                      (click)="selectedSize = size">
                      {{ size }}
                    </button>
                  }
                </div>
              </div>

              <div class="actions">
                <button class="buy-btn" [disabled]="!selectedSize">
                   {{ selectedSize ? 'AÑADIR A LA BOLSA' : 'SELECCIONA UNA TALLA' }}
                </button>
                <button class="wishlist-btn">♡</button>
              </div>

              <div class="details-list">
                <div class="detail-item">
                  <span class="label">Composición</span>
                  <span class="value">100% Cotton Premium (300g)</span>
                </div>
                <div class="detail-item">
                  <span class="label">Origen</span>
                  <span class="value">Designed in Italy</span>
                </div>
                <div class="detail-item">
                   <span class="label">Envío</span>
                   <span class="value">Free Worldwide Shipping</span>
                </div>
              </div>

              <div class="description-block">
                <h3>HISTORIA DE LA PRENDA</h3>
                <p class="description">{{ product()!.description }}</p>
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
  
  // State
  selectedSize: string | null = null;
  viewMode: 'image' | '3d' = 'image';

  product = computed(() => {
    const products = this.productService.products();
    return products.find((p: Product) => p.id === this.productId);
  });

  goBack() {
    this.router.navigate(['/']);
  }
}
