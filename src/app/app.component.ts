import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

interface ButtonColors {
  calculatePercentage: string;
  updateSalary: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  link: SafeUrl;
  buttonColors: ButtonColors = {
    calculatePercentage: "basic",
    updateSalary: "basic"
  };

  constructor(private sanitizer: DomSanitizer) {
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl('http://bills-calculate-percentage.gamidas.dev.br');
    this.buttonColors.calculatePercentage = "primary";
    this.buttonColors.updateSalary = "basic";
  }

  navigateToUpdateSalary(): void {
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl('http://bills-update-salary.gamidas.dev.br');
    this.buttonColors.updateSalary = "primary";
    this.buttonColors.calculatePercentage = "basic";
  }

  navigateToCalculatePercentage(): void {
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl('http://bills-calculate-percentage.gamidas.dev.br');
    this.buttonColors.calculatePercentage = "primary";
    this.buttonColors.updateSalary = "basic";
  }
}
