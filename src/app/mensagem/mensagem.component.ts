import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cp-mensagem',
  template: '<p class="alert alert-{{tipo}}"> <ng-content></ng-content> </p>',
  styles: []
})
export class MensagemComponent implements OnInit {

  @Input() tipo = 'primary';
  conteudo = '';

  constructor() { }

  ngOnInit() {
  }

}


