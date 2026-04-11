import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-container">
      <header class="header-section">
        <h1 class="title">Management Portal</h1>
        <p class="subtitle">AUBA Digital Luxury - Business Intelligence</p>
      </header>

      <!-- Resumen Financiero -->
      <div class="stats-grid">
        <div class="stat-card">
          <h3 class="stat-label">Ingresos Totales</h3>
          <p class="stat-value">$1,245,230.00</p>
          <span class="trend positive">↑ 18.5% YTD</span>
        </div>
        
        <div class="stat-card highlight">
          <h3 class="stat-label">Ganancia Neta (EBITDA)</h3>
          <p class="stat-value">$384,150.00</p>
          <span class="trend positive">↑ 12.2% este trimestre</span>
        </div>

        <div class="stat-card">
          <h3 class="stat-label">Streetwear Vendido</h3>
          <p class="stat-value">12,405</p>
          <span class="trend positive">↑ 5% esta semana</span>
        </div>

        <div class="stat-card">
          <h3 class="stat-label">Costo por Adquisición</h3>
          <p class="stat-value">$42.50</p>
          <span class="trend negative">↓ 3% optimización</span>
        </div>
      </div>

      <!-- Gestión de Socios e Inversores -->
      <section class="dashboard-section">
        <h2>Socios y Capital Humano</h2>
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Capital / Equity</th>
                <th>Salario Mensual</th>
                <th>Estado</th>
                <th>Último Pago</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let member of staff">
                <td>{{ member.name }}</td>
                <td>{{ member.role }}</td>
                <td>{{ member.equity || 'N/A' }}</td>
                <td>{{ member.salary | currency:'USD' }}</td>
                <td><span class="status-badge" [class.active]="member.status === 'ACTIVE'">{{ member.status }}</span></td>
                <td>{{ member.lastPayment }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Últimas Transacciones Comerciales -->
      <section class="dashboard-section">
        <h2>Flujo de Caja Reciente</h2>
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Tipo</th>
                <th>Monto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let tx of transactions">
                <td>#{{ tx.id }}</td>
                <td>{{ tx.desc }}</td>
                <td>{{ tx.type }}</td>
                <td [style.color]="tx.amount < 0 ? '#EF4444' : '#10B981'">{{ tx.amount | currency:'USD' }}</td>
                <td><span class="status-badge" [class.pending]="tx.status === 'PENDING'">{{ tx.status }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <button class="fab-btn">Añadir Acto Comercial</button>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  staff = [
    { name: 'Julian Rivera', role: 'Socio Fundador', equity: '40%', salary: 5000, status: 'ACTIVE', lastPayment: '2026-04-01' },
    { name: 'Elena Torres', role: 'Inversor Principal', equity: '15%', salary: 0, status: 'ACTIVE', lastPayment: 'N/A' },
    { name: 'Lucas Smith', role: 'Lead Developer', equity: '2%', salary: 4200, status: 'ACTIVE', lastPayment: '2026-04-01' },
    { name: 'Sofia Chen', role: 'Diseñadora Streetwear', equity: 'N/A', salary: 3800, status: 'ACTIVE', lastPayment: '2026-04-01' }
  ];

  transactions = [
    { id: 'TX-9012', desc: 'Venta Hoodie L\'ÉTERNEL x15', type: 'Ingreso', amount: 2250, status: 'COMPLETED' },
    { id: 'TX-9013', desc: 'Pago Suministros Textiles', type: 'Gasto', amount: -1200, status: 'COMPLETED' },
    { id: 'TX-9014', desc: 'Suscripción Azure/AI Services', type: 'Gasto', amount: -450, status: 'PENDING' },
    { id: 'TX-9015', desc: 'Inyección Capital Inversor A', type: 'Inversión', amount: 50000, status: 'COMPLETED' }
  ];
}
