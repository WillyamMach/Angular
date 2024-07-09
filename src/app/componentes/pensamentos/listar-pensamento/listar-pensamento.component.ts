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
    {
      conteudo: "I love PHP",
      autoria: 'roger',
      modelo: 'modelo3'
    },
    {
      conteudo: "I love make web sites and discover new technologys. I was studing php, but i have to know kotlin, so bye bye php, see you soon my brother. Kotlin is very interesting, cause we can use it to make web aplications on android ambient. it will be funny undertend this!",
      autoria: 'Willyam',
      modelo: 'modelo3'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
