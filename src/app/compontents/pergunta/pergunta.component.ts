import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pergunta',
  standalone: true,
  imports: [],
  templateUrl: './pergunta.component.html',
  styleUrl: './pergunta.component.scss'
})
export class PerguntaComponent {
  @Input() questionText!: string;
  @Input() options!: string[];
  @Output() optionSelected = new EventEmitter<string>();

  constructor() { }

  selectOption(option: string) {
    this.optionSelected.emit(option);
  }
}
