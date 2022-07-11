

export class Tabela {
  columnDef: string[];
  header: string[];
  cell: string[];
  content: any[];

  constructor(columnDef: string[], header: string[], cell: (element: any) => string[], content: any[]) {}
}
