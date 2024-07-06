import { Routes } from '@angular/router';
import { CalculatePercentageComponent } from './calculate-percentage/calculate-percentage.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';

export const routes: Routes = [
  {
    path: '',
    component: CalculatePercentageComponent,
    pathMatch: 'full'
  },
  {
    path: 'calcular-salario',
    component: CalculatePercentageComponent,
  },
  {
    path: 'atualizar-salario',
    component: UpdateSalaryComponent,
  },
];
