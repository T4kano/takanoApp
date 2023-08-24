export class Init {
  load() {
    if (
      localStorage.getItem('products') === null ||
      localStorage.getItem('products') == undefined
    ) {
      console.log('Nenhum produto encontrato... Criando...');
      let prods = [
        {
          id: 1,
          name: 'Arroz',
          unity: 1,
          quantity: 3,
          price: 50,
          validity: '2023-10-21T13:28:06.419Z',
          manufacture: '2023-10-20T13:28:06.419Z',
          perishable: false,
        },
        {
          id: 2,
          name: 'Feijão',
          unity: 2,
          quantity: 3,
          price: 50,
          validity: '2023-10-21T13:28:06.419Z',
          manufacture: '2023-10-20T13:28:06.419Z',
          perishable: false,
        },
        {
          id: 3,
          name: 'Batata',
          unity: 3,
          quantity: 3,
          price: 50,
          validity: '2023-10-21T13:28:06.419Z',
          manufacture: '2023-10-20T13:28:06.419Z',
          perishable: false,
        },
      ];

      localStorage.setItem('products', JSON.stringify(prods));
      return;
    } else {
      console.log('Produtos encontrados...');
    }
  }
}
