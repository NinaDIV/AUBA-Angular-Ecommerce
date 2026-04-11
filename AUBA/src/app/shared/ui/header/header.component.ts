import { Component, HostListener, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header" 
      [class.header--scrolled]="isScrolled" 
      [class.header--hidden]="isHidden"
      [class.header--menu-open]="isMenuOpen"
      [class.header--search-open]="isSearchOpen">
      
      <div class="scroll-progress" [style.width.%]="scrollProgress"></div>

      <div class="header__left">
        <a href="tel:+123456789" class="nav-link nav-link--utility">Póngase en contacto con nosotros</a>
      </div>
      
      <div class="header__center">
        <div class="logo" routerLink="/" (click)="closeAll()">AUBA</div>
      </div>
      
      <div class="header__right">
        <div class="header__icons">
          <button class="icon-btn" aria-label="Shopping bag">
            <span class="icon-text">Bolsa</span>
            <div class="cart-count">0</div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" /></svg>
          </button>
          
          <button class="icon-btn" aria-label="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z" /></svg>
          </button>

          <button class="icon-btn icon-btn--search" aria-label="Search" (click)="toggleSearch()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" *ngIf="!isSearchOpen"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" *ngIf="isSearchOpen"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>

          <button class="menu-btn" aria-label="Menu" (click)="toggleMenu()">
             <div class="menu-label">{{ isMenuOpen ? 'Cerrar' : 'Menú' }}</div>
             <div class="hamburger" [class.hamburger--open]="isMenuOpen">
                <span></span>
                <span></span>
                <span></span>
             </div>
          </button>
        </div>
      </div>

      <!-- Search Overlay -->
      <div class="search-overlay" [class.search-overlay--open]="isSearchOpen">
        <div class="search-container">
          <input type="text" placeholder="¿Qué estás buscando?" #searchInput>
          <div class="search-suggestions">
            <p class="suggestion-title">Sugerencias</p>
            <ul>
              <li>Colección primavera</li>
              <li>Probador Virtual VR</li>
              <li>Novedades</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Full-screen Menu -->
      <div class="menu-overlay" [class.menu-overlay--open]="isMenuOpen">
        <div class="menu-content">
          <div class="menu-grid">
            <div class="menu-column">
              <h3>Colecciones</h3>
              <a routerLink="/" (click)="closeAll()">Todo el catálogo</a>
              <a routerLink="/" (click)="closeAll()">Novedades</a>
              <a routerLink="/" (click)="closeAll()">Edición limitada</a>
              <a routerLink="/" (click)="closeAll()">Exclusivos Online</a>
            </div>
            <div class="menu-column">
              <h3>Innovación</h3>
              <a routerLink="/vr-room" (click)="closeAll()">Probador Virtual VR</a>
              <a routerLink="/vr-room" (click)="closeAll()">Experiencia 3D</a>
              <a routerLink="/vr-room" (click)="closeAll()">Guía de Tallas</a>
            </div>
            <div class="menu-column">
              <h3>Administración</h3>
              <a routerLink="/admin" (click)="closeAll()">Dashboard</a>
              <a routerLink="/admin/team" (click)="closeAll()">Nuestro Equipo</a>
            </div>
          </div>
          <div class="menu-footer">
            <div class="social-links">
              <a>Instagram</a>
              <a>Facebook</a>
              <a>Twitter</a>
            </div>
            <p class="brand-vision">AUBA: Redefiniendo la moda digital.</p>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  isScrolled = false;
  isHidden = false;
  isMenuOpen = false;
  isSearchOpen = false;
  scrollProgress = 0;
  private lastScrollTop = 0;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.lastScrollTop = window.scrollY;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const st = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Scroll progress line
      this.scrollProgress = (st / docHeight) * 100;

      // Transparent vs Solid
      this.isScrolled = st > 50;

      // Show/Hide behavior (only if menu/search are closed)
      if (!this.isMenuOpen && !this.isSearchOpen) {
        if (st > this.lastScrollTop && st > 100) {
          this.isHidden = true;
        } else {
          this.isHidden = false;
        }
      }
      
      this.lastScrollTop = st <= 0 ? 0 : st;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) this.isSearchOpen = false;
    this.toggleBodyScroll();
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) this.isMenuOpen = false;
    this.toggleBodyScroll();
  }

  closeAll() {
    this.isMenuOpen = false;
    this.isSearchOpen = false;
    this.toggleBodyScroll();
  }

  private toggleBodyScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isMenuOpen || this.isSearchOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
}
