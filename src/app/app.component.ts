import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CalculatePercentageComponent } from './calculate-percentage/calculate-percentage.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface ButtonColors {
  calculatePercentage: string;
  updateSalary: string;
}

enum Components {
  CalculatePercentage,
  UpdateSalary
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    CalculatePercentageComponent,
    UpdateSalaryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttonColors: ButtonColors = {
    calculatePercentage: "basic",
    updateSalary: "basic"
  };

  public activeComponent = Components.CalculatePercentage;
  public ComponentsType = Components;

  constructor() {
    this.buttonColors.calculatePercentage = "primary";
    this.buttonColors.updateSalary = "basic";
  }

  navigateToUpdateSalary(): void {

    this.activeComponent = Components.UpdateSalary;
    this.buttonColors.updateSalary = "primary";
    this.buttonColors.calculatePercentage = "basic";
  }

  navigateToCalculatePercentage(): void {
    this.activeComponent = Components.CalculatePercentage;
    this.buttonColors.calculatePercentage = "primary";
    this.buttonColors.updateSalary = "basic";
  }
}
