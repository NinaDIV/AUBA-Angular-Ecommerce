import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vr-room',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="vr-container">
      <h1 class="title">Probador Virtual & Escáner 3D</h1>
      <p class="subtitle">Desarrollado con Meshy AI</p>

      <div class="split-screen">
        <div class="scanner-section">
          <h2>1. Escanea tu prenda</h2>
          <div class="placeholder-box scanner">
            <div class="icon">📷</div>
            <p>Sube fotos de tu prenda y la IA (Meshy) generará un modelo 3D hiperrealista automáticamente.</p>
            <button class="action-btn">Subir Imágenes</button>
          </div>
        </div>

        <div class="vr-section">
          <h2>2. Probador VR (Póntelo)</h2>
          <div class="placeholder-box vr-view">
            <div class="icon">👓</div>
            <p>Visualiza cómo te queda. Sincroniza con tus gafas VR o usa la cámara de tu móvil para Realidad Aumentada.</p>
            <button class="action-btn secondary">Activar Cámara</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./vr-room.component.scss']
})
export class VrRoomComponent {}
