import { Component } from '@angular/core';
import { NomeComponent } from '../nome/nome.component';
import { HeaderComponent } from '../header/header.component';
import { PerguntaComponent } from '../pergunta/pergunta.component';
import { Pergunta01Component } from '../../components/perguntas/pergunta01/pergunta01.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NomeComponent, HeaderComponent, PerguntaComponent, Pergunta01Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
