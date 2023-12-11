export interface Connect<C> {
  connection: C;
}

export interface Database<C, TableSchema> extends Connect<C> {
  insert(data: TableSchema): Promise<boolean>;
  selectOne(id: number): Promise<TableSchema>;
  selectAll(): Promise<TableSchema[]>;
}
