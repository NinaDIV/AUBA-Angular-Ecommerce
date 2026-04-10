import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-container">
      <h1 class="title">E-commerce Dashboard</h1>
      <p class="subtitle">Visión general financiera</p>

      <div class="stats-grid">
        <div class="stat-card">
          <h3 class="stat-label">Ventas Totales (Bruto)</h3>
          <p class="stat-value">\$$45,230.00</p>
          <span class="trend positive">↑ 12% este mes</span>
        </div>
        
        <div class="stat-card highlight">
          <h3 class="stat-label">Ganancia Neta</h3>
          <p class="stat-value">\$$18,400.00</p>
          <span class="trend positive">↑ 8% este mes</span>
        </div>

        <div class="stat-card">
          <h3 class="stat-label">Prendas Vendidas</h3>
          <p class="stat-value">523</p>
          <span class="trend neutral">Estable</span>
        </div>
      </div>

      <div class="chart-placeholder">
        <p>📊 Gráfico de Ingresos vs Gastos se renderizará aquí</p>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
