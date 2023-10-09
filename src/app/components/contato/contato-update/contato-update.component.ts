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
    id: 0,
    nome: '',
    email: '',
    telefone: 0
  }

  constructor(private contatoService: ContatoService, private router: Router, private route: ActivatedRoute ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService.readById(+id).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }
  // const idParam  = this.route.snapshot.paramMap.get("id")
  //   if (typeof idParam  === 'string') {
  //     const id = +idParam ;


  updateContato(): void {
    this.contatoService.update(this.contato).subscribe(() => {
      this.contatoService.showMessage('Contato atualizado com sucesso!');
      this.router.navigate(['/contatos']);
    });
  }

  cancel(): void{
    this.router.navigate(["/contatos"]);
  }
}
