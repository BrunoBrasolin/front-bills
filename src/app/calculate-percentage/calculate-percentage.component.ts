import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatePercentageInterface } from '../app.model';
import { BillsService } from '../bills.service';


@Component({
  selector: 'app-calculate-percentage',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './calculate-percentage.component.html',
  styleUrl: './calculate-percentage.component.scss'
})
export class CalculatePercentageComponent {
  constructor(private service: BillsService) {
  }
  public value: number | null = null;
  public apiReturn: CalculatePercentageInterface | null = null;

  onClickCalcular() {
    if (this.value === null) {
      alert('Favor inserir um valor válido para o cálculo!');
      return;
    }

    this.service.CalculatePercentage(this.value).subscribe(f => this.apiReturn = f);
  }

  onClickLimpar() {
    this.value = null;
    this.apiReturn = null;
  }
}
