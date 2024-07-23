import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiDtoInterface, PersonInterface } from '../app.model';
import { BillsService } from '../bills.service';

@Component({
  selector: 'app-update-salary',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './update-salary.component.html',
  styleUrl: './update-salary.component.scss'
})
export class UpdateSalaryComponent {
  constructor(private service: BillsService) {
  }
  public salary: number | null = null;
  public person: PersonInterface | null = null;
  public timer: number = 3000;

  onClickAtualizar(): void {
    if (this.salary === null || this.person === null) {
      alert('Favor colocar dados válidos!');
      return;
    }

    let dto: ApiDtoInterface = {
      salary: this.salary,
      person: this.person
    }

    this.service.UpdateSalary(dto)
      .subscribe({
        next: this.handleSuccess.bind(this),
        error: this.handleError.bind(this)
      });
  }

  handleSuccess(): void {
    alert(`Salário de ${this.person} atualizado para ${this.salary}!`);
  }

  handleError(): void {
    alert('Erro, favor contatar o Maggie Hub!');
  }
}
