import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato-read',
  templateUrl: './contato-read.component.html',
  styleUrls: ['./contato-read.component.scss']
})
export class ContatoReadComponent implements OnInit {

  contatos: Contato[] = [];
  displayedColumns = ['id', 'nome','email','telefone', 'action']
  // displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatoService.read().subscribe(contatos => {
      this.contatos = contatos
    })
  }

}
