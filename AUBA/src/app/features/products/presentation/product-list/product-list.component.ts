import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../../infrastructure/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="homepage">
      
      <!-- Seccion 1: Hero Banner -->
      <section class="hero-section">
        <img src="images/hoodie.png" alt="Hero background" class="hero-bg">
        <div class="hero-overlay">
          <h1 class="hero-title">L'ÉTERNEL</h1>
          <p class="hero-subtitle">Redefining Modern Streetwear</p>
          <button class="hero-btn">EXPLORE THE CAMPAIGN</button>
        </div>
      </section>

      <!-- Seccion 2: La Coleccion (Grid) -->
      <section class="container collection-section">
        <h2 class="section-title">The Collection</h2>
        <p class="section-subtitle">Autumn / Winter 2026</p>
        <div class="product-grid">
          @for (product of products(); track product.id) {
            <div class="product-card" (click)="goToDetail(product.id)">
              <div class="image-wrapper">
                <img [src]="product.imageSrc" [alt]="product.name" class="product-image">
              </div>
              <div class="product-details">
                <h3 class="name">{{ product.name }}</h3>
                <p class="price">\${{ product.price }}</p>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Seccion 3: Editorial / Identidad -->
      <section class="editorial-section">
        <div class="editorial-split">
          <div class="editorial-image">
            <img src="images/hoodie.png" alt="Editorial Fashion">
          </div>
          <div class="editorial-text">
            <h2>The Art of Silhouette</h2>
            <p>Every AUBA garment is meticulously crafted to disrupt the ordinary. We believe that true luxury lies in absolute minimalism and perfect architecture of fabric.</p>
            <a href="#" class="editorial-link">DISCOVER OUR HERITAGE</a>
          </div>
        </div>
      </section>

      <!-- Seccion 4: Newsletter -->
      <section class="newsletter-section">
        <h3>Join the Inner Circle</h3>
        <p>Subscribe to receive early access to exclusive drops.</p>
        <div class="subscribe-form">
          <input type="email" placeholder="Your email address">
          <button>SUBSCRIBE</button>
        </div>
      </section>

    </div>
  `,
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  private productService = inject(ProductService);
  private router = inject(Router);

  products = computed(() => this.productService.products());

  goToDetail(id: string) {
    this.router.navigate(['/product', id]);
  }
}
