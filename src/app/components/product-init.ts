export class Init {
  load() {
    if(localStorage.getItem('products') === null || localStorage.getItem('products') == undefined) {
      console.log('Nenhum produto encontrato... Criando...');
      let prods = [
        {
          id:1,
          firstName:'Prashant',
          lastName:'Panigrahi',
          languages: ['Hindi','English']
        }, 
        {
          id:2,
          firstName:'Abhishek',
          lastName:'Singh',
          languages: ['Hindi','Marathi']
        }, {
          id:3,
          firstName:'Akshay',
          lastName:'Rathod',
          languages: ['Hindi','English','Marathi']
        },
      ];

      localStorage.setItem('products', JSON.stringify(prods));
      return 
    } else {
      console.log('Produtos encontrados...');
    }
  }
}