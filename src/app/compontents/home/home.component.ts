import { Component } from '@angular/core';
import { NomeComponent } from '../nome/nome.component';
import { HeaderComponent } from '../header/header.component';
import { PerguntaComponent } from '../pergunta/pergunta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NomeComponent, HeaderComponent, PerguntaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  question: string = 'Qual é a capital do Brasil?';
  options: string[] = ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'];
  selectedOption: string = '';

  handleOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
