export class Init {
  load() {
    if (
      localStorage.getItem('products') === null ||
      localStorage.getItem('products') == undefined
    ) {
      console.log('Nenhum produto encontrato... Criando...');
      let prods = [
        {
          id: 'a',
          name: 'Arroz',
          unit: 'lt',
          quantity: '3',
          price: 50,
          expiration_date: '',
          manufacturing_date: '2023-10-20',
          perishable: false,
        },
        {
          id: 'b',
          name: 'Feijão',
          unit: 'kg',
          quantity: '3',
          price: 50,
          expiration_date: '',
          manufacturing_date: '2023-10-20',
          perishable: false,
        },
        {
          id: 'c',
          name: 'Batata',
          unit: 'un',
          quantity: '3',
          price: 50,
          expiration_date: '2023-10-21',
          manufacturing_date: '2023-10-20',
          perishable: true,
        },
      ];

      localStorage.setItem('products', JSON.stringify(prods));
      return;
    } else {
      console.log('Produtos encontrados...');
    }
  }
}
