export interface Connect<C> {
  connection: C;
}

export interface Database<C> extends Connect<C> {
  insert<Paramenter>(data: Paramenter): Promise<boolean>;
  selectOne<Response>(id: number): Promise<Response>;
  selectAll<Response>(): Promise<Response[]>;
}
