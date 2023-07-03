// Subsistema 1
class Subsystem1 {
    operation1() {
      console.log('OPERAÇÃO SUBSISTEMA 1')
    }
  }
  
  // Subsistema 2
  class Subsystem2 {
    operation2() {
      console.log('OPERAÇÃO SUBSISTEMA 2');
    }
  }
  
  // Facade
  class Facade {
    constructor() {
      this.subsystem1 = new Subsystem1();
      this.subsystem2 = new Subsystem2();
    }
  
    operation() {
      this.subsystem1.operation1();
      this.subsystem2.operation2();
    }
  }
  
  // Cliente
  const facade = new Facade();
  facade.operation();
  