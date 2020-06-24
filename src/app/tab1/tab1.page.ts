import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  public num1: number;
  public num2: number;
  public resultado: number;

  constructor() { }

  // Função para somar os números
  public somar() {
    if (this.num1 != null && this.num2 != null) {
      this.resultado = this.num1 + this.num2;
    }
  }

  // Função para subtrair os números
  public subtrair() {
    if (this.num1 != null && this.num2 != null) {
      this.resultado = this.num1 - this.num2;
    }
  }

  // Função para multiplicar os números
  public multiplicar() {
    if (this.num1 != null && this.num2 != null) {
      this.resultado = this.num1 * this.num2;
    }
  }

  // Função para dividir os números
  public dividir() {
    if (this.num1 != null && this.num2 != null) {
      this.resultado = this.num1 / this.num2;
    }
  }

  // Função para apagar todos os números
  public limpar() {
    this.num1 = null;
    this.num2 = null;
    this.resultado = null;
  }
}
