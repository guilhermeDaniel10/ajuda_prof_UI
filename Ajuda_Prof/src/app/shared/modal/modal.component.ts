import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() toggleModal: boolean;


  show: boolean = false;


  constructor() { }
  

  ngOnInit(): void {
  }

  toggle () {
    this.show = !this.show;
  }

}
