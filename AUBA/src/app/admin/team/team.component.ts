import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-container">
      <div class="header-actions">
        <div>
          <h1 class="title">Gestión de Socios & Equipo</h1>
          <p class="subtitle">Trabajadores, inversores y pagos</p>
        </div>
        <button class="add-btn">+ Añadir Miembro</button>
      </div>

      <div class="team-list">
        @for (member of teamMembers(); track member.id) {
          <div class="team-card">
            <div class="avatar">{{ member.name.charAt(0) }}</div>
            <div class="info">
              <h3>{{ member.name }}</h3>
              <span class="role" [class.investor]="member.role === 'Inversor'">{{ member.role }}</span>
            </div>
            <div class="payment-info">
              <span class="label">Pago pendiente:</span>
              <span class="amount">\${{ member.pendingPayout }}</span>
            </div>
            <button class="pay-btn">Liquidar</button>
          </div>
        }
      </div>
    </div>
  `,
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamMembers = signal([
    { id: 1, name: 'Alice Founder', role: 'Socia Fundadora', pendingPayout: 1200 },
    { id: 2, name: 'Bob Investor', role: 'Inversor', pendingPayout: 5000 },
    { id: 3, name: 'Carlos Designer', role: 'Trabajador (Diseñador 3D)', pendingPayout: 800 },
  ]);
}
