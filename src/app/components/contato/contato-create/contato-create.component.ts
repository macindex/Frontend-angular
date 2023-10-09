import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Router } from '@angular/router';
import { Contato } from '../contato.model';

@Component({
  selector: 'app-contato-create',
  templateUrl: './contato-create.component.html',
  styleUrls: ['./contato-create.component.scss']
})
export class ContatoCreateComponent implements OnInit {
  
  contato: Contato = {
    id: 0,
    nome: '',
    email: '',
    telefone: 0
  }

  constructor(private contatoService: ContatoService, private router: Router) {}

  ngOnInit(): void { }

  createContato(): void {
    this.contatoService.create(this.contato).subscribe(()=> {
      this.contatoService.showMessage('Contato criado!')
      this.router.navigate(['/contatos'])
    })
  }
  cancel(): void {
    this.router.navigate(['/contatos'])
  }
}
