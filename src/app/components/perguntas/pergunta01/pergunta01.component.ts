import { Component } from '@angular/core';
import { PerguntaComponent } from '../../../compontents/pergunta/pergunta.component';

@Component({
  selector: 'app-pergunta01',
  standalone: true,
  imports: [PerguntaComponent],
  templateUrl: './pergunta01.component.html',
  styleUrl: './pergunta01.component.scss'
})
export class Pergunta01Component {
  question: string = 'Qual é a capital do Brasil?';
  options: string[] = ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'];
  selectedOption: string = '';

  handleOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
