import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: "I love Js",
      autoria: 'Jonas',
      modelo: 'modelo1'
    },
    {
      conteudo: "I love jQuery",
      autoria: 'Mathias',
      modelo: 'modelo2'
    },
    {
      conteudo: "I love PHP",
      autoria: 'roger',
      modelo: 'modelo3'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
