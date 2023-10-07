import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-crud',
  templateUrl: './contato-crud.component.html',
  styleUrls: ['./contato-crud.component.scss']
})
export class ContatoCrudComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/contatos/create'])
  }
}
