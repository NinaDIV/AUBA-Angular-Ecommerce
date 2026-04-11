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
      
      <!-- Seccion 1: Hero Experience (Cinematic) -->
      <section class="hero-section">
        <div class="hero-bg-container">
           <img src="/images/hero.png" alt="Hero background" class="hero-bg">
           <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <div class="hero-tag animate-in">A New Paradigm in Couture</div>
          <h1 class="hero-title animate-in">AUBA</h1>
          <div class="hero-divider animate-in"></div>
          <p class="hero-subtitle animate-in">Where AI-driven precision meets the timeless legacy of Italian design.</p>
          <div class="hero-actions animate-in">
            <button class="hero-btn" (click)="scrollTo('#collection')">EXPLORE DROPS</button>
            <button class="hero-btn hero-btn--glass" routerLink="/vr-room">VIRTUAL FITTING</button>
          </div>
        </div>
        
        <div class="hero-footer-info animate-in">
           <div class="scroll-hint"><span>SCROLL</span><div class="line"></div></div>
           <div class="location-stamp">MILANO / TOKYO / DIGITAL</div>
        </div>
      </section>

      <!-- Seccion 2: Manifesto (Pure Elegance) -->
      <section class="manifesto-section animate-in">
        <div class="container--narrow">
          <span class="manifesto-tag">THE MANIFESTO</span>
          <h2 class="manifesto-title">Disrupting the architecture of the human silhouette.</h2>
          <p class="manifesto-body">AUBA no es solo ropa; es una declaración de soberanía digital. Cada fibra está impregnada de innovación algorítmica y artesanía visceral.</p>
        </div>
      </section>

      <!-- Seccion 3: The Masterworks (Editorial Grid) -->
      <section class="container collection-section" id="collection">
        <div class="collection-header animate-in">
           <div class="title-wrap">
              <span class="category-tag">SS26 Pre-Release</span>
              <h2 class="section-title">The Masterworks</h2>
           </div>
           <div class="filter-placeholder">FILTRAR POR CATEGORÍA ↓</div>
        </div>
        
        <div class="product-grid">
          @for (product of products(); track product.id; let i = $index) {
            <div class="product-card animate-in" 
                 [style.animation-delay]="(0.1 + (i * 0.1)) + 's'"
                 (click)="goToDetail(product.id)">
              <div class="image-wrapper">
                <img [src]="product.imageSrc" [alt]="product.name" class="product-image">
                
                <div class="product-badge" *ngIf="i < 2">Limited</div>

                <div class="card-interaction-overlay">
                   <div class="btn-group">
                      <button class="btn-3d" (click)="open3DView($event, product.id)">
                         <span class="btn-icon">⚡</span>
                         EXPERIMENTAL 3D
                      </button>
                   </div>
                   <div class="hover-details">
                      <p>{{ product.description }}</p>
                      <span class="tap-hint">DESCUBRIR MÁS</span>
                   </div>
                </div>
              </div>
              <div class="product-info-minimal">
                 <div class="info-row">
                    <h3 class="name">{{ product.name }}</h3>
                    <span class="price-minimal">{{ product.price | currency:'USD' }}</span>
                 </div>
                 <div class="brand-subline">AUBA / ARCHIVE_01</div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Seccion 4: Lookbook (Immersive Banner) -->
      <section class="lookbook-section">
        <div class="lookbook-split">
           <div class="lookbook-pane lookbook-pane--image">
              <img src="/images/hoodie.png" alt="Editorial look" class="parallax-img">
           </div>
           <div class="lookbook-pane lookbook-pane--content">
              <span class="tag">Next Generation</span>
              <h2>Virtual Identity</h2>
              <p>Tu avatar es una extensión de tu alma. AUBA crea el puente entre tu presencia física y tu legado digital mediante escaneos de precisión Meshy-AI.</p>
              <button class="btn-editorial" routerLink="/vr-room">INGRESAR AL VR ROOM</button>
           </div>
        </div>
      </section>

      <!-- Seccion 5: Newsletter (Dark High-End) -->
      <section class="newsletter-dark">
        <div class="newsletter-wrap animate-in">
          <h2>Inner Circle Exclusive</h2>
          <p>Únete a la élite digital. Recibe acceso anticipado a drops de edición limitada y eventos VR exclusivos.</p>
          <div class="input-minimal">
            <input type="email" placeholder="ENTER YOUR EMAIL">
            <button>JOIN</button>
          </div>
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

  scrollTo(selector: string) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  open3DView(event: Event, id: string) {
    event.stopPropagation();
    alert(`Iniciando motor de visualización 3D para el producto ${id}...`);
    // Aquí se integraría el visor de Meshy o Three.js
  }
}
