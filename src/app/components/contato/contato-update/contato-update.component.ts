import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from '../contato.model';

@Component({
  selector: 'app-contato-update',
  templateUrl: './contato-update.component.html',
  styleUrls: ['./contato-update.component.scss']
})
export class ContatoUpdateComponent implements OnInit  {

  contato: Contato = {
    id: 98,
    nome: 'Armando',
    email: 'arm@gmail.com',
    telefone: 8173459020
  }

  constructor(private contatoService: ContatoService, private router: Router, private route: ActivatedRoute ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.contatoService.readById(0).subscribe((contato) => {
      this.contato = contato;
    });
  }

  updateContato(): void {
    this.contatoService.update(this.contato).subscribe(() => {
      this.contatoService.showMessage("Contato atualizado com sucesso!");
      this.router.navigate(["/contatos"]);
    });
  }
  cancel(): void{
    this.router.navigate(["/contatos"]);
  }
}
