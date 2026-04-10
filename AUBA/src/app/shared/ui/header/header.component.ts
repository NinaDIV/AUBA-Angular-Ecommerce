import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="logo" routerLink="/">AUBA</div>
      
      <nav class="main-nav">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Tienda</a>
        <a routerLink="/vr-room" routerLinkActive="active">Probador VR</a>
        <a routerLink="/admin" routerLinkActive="active">Dashboard</a>
        <a routerLink="/admin/team" routerLinkActive="active">Equipo</a>
      </nav>

      <button class="cart-btn">CARRITO (0)</button>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
