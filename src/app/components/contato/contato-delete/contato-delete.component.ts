import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contato-delete',
  templateUrl: './contato-delete.component.html',
  styleUrls: ['./contato-delete.component.scss']
})
export class ContatoDeleteComponent implements OnInit {
  contato: Contato = {
    id: 0,
    nome: '',
    email: '',
    telefone: 0
  } 

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService.readById(+id).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }
  
  confirmDelete(): void {
    if (confirm('Tem certeza de que deseja excluir este contato?')) {
      this.deleteContato();
    }
  }

  deleteContato(): void {
    this.contatoService.delete(this.contato.id).subscribe(() => {
      this.contatoService.showMessage('Contato excluído com sucesso!');
      this.router.navigate(['/contatos']);
    });
  }

  cancel(): void {
    this.router.navigate(["/contatos"]);
  }
}
