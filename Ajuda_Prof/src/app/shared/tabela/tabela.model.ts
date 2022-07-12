

export class Tabela {
  columnDef: string[];
  header: string[];
  content: any[];
  paginacao?: boolean;

  constructor(columnDef: string[], header: string[], content: any[]) {}
}
