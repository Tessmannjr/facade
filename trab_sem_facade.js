// Subsistema 1
class Subsystem1 {
  operation1() {
    console.log('OPERAÇÃO SUBSISTEMA 1');
  }
}

// Subsistema 2
class Subsystem2 {
  operation2() {
    console.log('OPERAÇÃO SUBSISTEMA 2');
  }
}

// Cliente
const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();

subsystem1.operation1();
subsystem2.operation2();
