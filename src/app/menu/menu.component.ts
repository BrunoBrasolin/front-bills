import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

interface ButtonColors {
  calculatePercentage: string;
  updateSalary: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  buttonColors: ButtonColors = {
    calculatePercentage: "basic",
    updateSalary: "basic"
  };

  constructor() {
    this.buttonColors.calculatePercentage = "primary";
    this.buttonColors.updateSalary = "basic";
  }

  navigateToUpdateSalary(): void {
    this.buttonColors.updateSalary = "primary";
    this.buttonColors.calculatePercentage = "basic";
  }

  navigateToCalculatePercentage(): void {
    this.buttonColors.calculatePercentage = "primary";
    this.buttonColors.updateSalary = "basic";
  }
}
