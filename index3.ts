//callback

function getData(callback: { (data: any): void; (arg0: string): void; }) {
    setTimeout(() => {
      const data = 'Some data';
      callback(data);
    }, 1000);
  }
  
  getData((data) => {
    console.log(data);
  });