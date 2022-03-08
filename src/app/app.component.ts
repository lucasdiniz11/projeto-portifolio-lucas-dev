import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'projeto-bytebank-alura';
  valorRecebido: any[] = [];
  pokemons: any;

  constructor(){}

  ngOnInit(): void {

  }

  //receberValor($event: any) {
  //  this.servico.adicionar($event);
  //}
}
