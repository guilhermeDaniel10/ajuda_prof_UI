import { CellDef } from '@angular/cdk/table';

export class Cell {
  columnDef: string;
  header: string;
  cell: string;

  constructor(columnDef: string, header: string, cell: string) {}
}
