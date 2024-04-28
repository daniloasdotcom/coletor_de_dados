import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nome',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nome.component.html',
  styleUrl: './nome.component.scss'
})
export class NomeComponent {
  nomeUsuario: string = '';

  salvarNome() {
    // Aqui você pode implementar a lógica para salvar o nome do usuário
    console.log('Nome do usuário:', this.nomeUsuario);
    // Por exemplo, você pode enviar o nome do usuário para um serviço ou fazer qualquer outra coisa com ele.
  }
}
