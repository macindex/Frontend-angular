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
  contato!: Contato 

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contatoService.readById(0).subscribe((contato) => {
      this.contato = contato;
    });
  }

  deleteContato(): void {
    this.contatoService.delete(this.contato.id).subscribe(() => {
      this.contatoService.showMessage("Contato excluido com sucesso!");
      this.router.navigate(["/contatos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/contatos"]);
  }
}
