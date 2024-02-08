function getData2(callback: { (data: any): void; (data: any): void; (arg0: string): void; }) {
    setTimeout(() => {
      const data = 'Some data';
      callback(data);
    }, 10000);
  }
  
  getData2((data) => {
    console.log(data);
  });