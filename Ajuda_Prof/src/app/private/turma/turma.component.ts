import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/private/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

  constructor(private turmaService: TurmaService) { }

  ngOnInit() {
    this.turmaService.getAllTurmas().subscribe((data) => { console.log(data)});
  }

}
