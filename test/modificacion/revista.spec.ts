import "mocha";
import { expect } from "chai";
import { Revista } from "../../src/modificacion/revista";
import { Subscriptor } from "../../src/modificacion/subscriptor";

let revista = new Revista(
  "OPC",
  "02-03-2023",
  "las ultimas palabras de un alumno",
  24
);

let Primercliente = new Subscriptor("Andrés");
let segundoCliente = new Subscriptor("Jesús");

describe("revista test", () => {
  it("subscribir a andres", () => {
    try {
      revista.subscribe(Primercliente);
    } catch (error) {
      console.log(`${Primercliente.getnombre()} ya está subscrito`);
    }
  });

  it("subscribir a jesus", () => {
    try {
      revista.subscribe(segundoCliente);
    } catch (error) {
      console.log(`${segundoCliente.getnombre()} ya está subscrito`);
    }
  });

  it("volver a subscribir a andres", () => {
    try{
      revista.subscribe(Primercliente)
    } catch (error) {
      console.log( `${Primercliente.getnombre()} ya está subscrito`)
    }
  });

  it("desubscribir a andres", () => {
    revista.unsubscribe(Primercliente);
  });

  it("desubscribir a andres otra vez", () => {
    try{
      revista.unsubscribe(segundoCliente)
    } catch (error) {
      console.log( `${segundoCliente.getnombre()} ya está subscrito`)
    }
  });

  it("Actualixar revista", () => {
    expect(
      revista.publication(
        "OPC",
        "03-03-2023",
        "ahora ya no necesito a nadie",
        52
      )
    );
  });
  it("set name revista", () => {
    revista.setname("OPC");
  });
  it("get name revista", () => {
    expect(revista.getname()).to.be.equal("OPC");
  });
  it("get name revista mal", () => {
    expect(revista.getname()).to.not.be.equal("OP");
  });
  it("set fecha revista", () => {
    revista.setFecha("02-03-2023");
  });
  it("get fecha revista", () => {
    expect(revista.getFecha()).to.be.equal("02-03-2023");
  });
  it("get fecha revista mal", () => {
    expect(revista.getFecha()).to.not.be.equal("02-03-202");
  });
  it("set titutlo revista", () => {
    revista.setTitulo("las ultimas palabras de un alumno");
  });
  it("get titulo revista", () => {
    expect(revista.getTitulo()).to.be.equal("las ultimas palabras de un alumno");
  });
  it("get titulo revista mal", () => {
    expect(revista.getTitulo()).to.not.be.equal(
      "las ultimas asddalabras de un alumno"
    );
  });

  it("set lectores revista", () => {
    revista.setLectores(24);
  });
  it("get lectores revista", () => {
    expect(revista.getlectores()).to.be.equal(24);
  });
  it("get lectores revista mal", () => {
    expect(revista.getlectores()).to.not.be.equal(25);
  });


  it("set nombre primer lector", () => {
    Primercliente.setNombre("armando");
  });
  it("get nombre rimer cliente", () => {
    expect(Primercliente.getnombre()).to.be.equal("armando");
  });
  it("get lectores revista mal", () => {
    expect(Primercliente.getnombre()).to.not.be.equal("armandon`t");
  });
});
