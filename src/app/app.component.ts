import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CalculatePercentageComponent } from './calculate-percentage/calculate-percentage.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MenuComponent,
    CalculatePercentageComponent,
    UpdateSalaryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
