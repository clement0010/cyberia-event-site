import { DocumentNode } from 'graphql';

// const { resolveClient } = useApolloClient();
// const client = resolveClient();

class CacheService {
  client: any;

  constructor(clientProvider: any) {
    this.client = clientProvider;
  }

  read(graphqlDocument: DocumentNode): any {
    const data = this.client.readQuery({
      query: graphqlDocument,
    });
    return data;
  }

  /**
   *
   * @param graphqlDocument Graphql Tag, please import from generated file explicitly
   * @param result Write updated mutation result, must follow the exact data format (shape) of the query .
   * { dataName } : dataName must be exact match in the field.
   *
   * Refer to graphql-tag if unsure to data shape.
   */
  write(graphqlDocument: DocumentNode, data: any): any {
    this.client.writeQuery({
      query: graphqlDocument,
      data,
    });
  }
}

export default CacheService;
