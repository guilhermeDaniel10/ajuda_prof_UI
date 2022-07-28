import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tabela } from './tabela.model';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit, AfterViewInit {
  @Input() dados: Tabela;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  paginacaoBol: boolean = false;
  dataSource: MatTableDataSource<any>;
  columns: string[];
  totalPaginacao = 0;


  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit() {
    console.log(this.dados.content);
    this.fillCells();
    this.iniatePaginatorAndSort();
  }

  ngAfterViewInit() {
    this.iniatePaginatorAndSort();
  }

  fillCells() {
    this.dataSource = new MatTableDataSource(this.dados.content);
    this.columns = this.dados.columnDef;
  }

  iniatePaginatorAndSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.pathDataAccessor;
    if (this.dados.paginacao) {
      this.paginacaoBol = true;
      this.dataSource.paginator = this.paginator;
      this.totalPaginacao = this.dados.content.length;
    }
  }

  pathDataAccessor(item: any, path: string): any {
    return path.split('.').reduce((accumulator: any, key: string) => {
      return accumulator ? accumulator[key] : undefined;
    }, item);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
