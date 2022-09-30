import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas-criar-teste',
  templateUrl: './offcanvas-criar-teste.component.html',
  styleUrls: ['./offcanvas-criar-teste.component.scss'],
})
export class OffcanvasCriarTesteComponent implements OnInit {
  successSubmit: boolean = false;
  closeResult = '';

  
  constructor(private offcanvasService: NgbOffcanvas) {}

  ngOnInit(): void {}

  onSuccessSubmit(event) {
    this.successSubmit = event.successSubmit;
    console.log(this.successSubmit);
    
  }


}
