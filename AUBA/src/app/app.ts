import { Component, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  template: `
    <!-- Background Atmosphere -->
    <div class="background-container">
      <div class="blob blob--1" [style.transform]="blobTransform(0.05)"></div>
      <div class="blob blob--2" [style.transform]="blobTransform(-0.03)"></div>
      <div class="blob blob--3" [style.transform]="blobTransform(0.02)"></div>
    </div>

    <app-header></app-header>
    <main>
       <router-outlet></router-outlet>
    </main>

    <footer class="footer-simple">
       <p>&copy; 2026 AUBA DIGITAL LUXURY. All rights reserved.</p>
    </footer>
  `,
  styleUrl: './app.scss'
})
export class App {
  private platformId = inject(PLATFORM_ID);
  protected readonly title = signal('AUBA');
  
  mouseX = 0;
  mouseY = 0;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (isPlatformBrowser(this.platformId)) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
  }

  blobTransform(factor: number) {
    if (isPlatformBrowser(this.platformId)) {
      const x = (this.mouseX - window.innerWidth / 2) * factor;
      const y = (this.mouseY - window.innerHeight / 2) * factor;
      return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
    return 'translate(-50%, -50%)';
  }
}
