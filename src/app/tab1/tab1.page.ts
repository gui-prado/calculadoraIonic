import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  public num1: number;
  public num2: number;
  public resposta: number;

  constructor() {}

  public somar() {
    this.resposta = this.num1 + this.num2;
  }

  public subtrair() {
    this.resposta = this.num1 - this.num2;
  }

  public multiplicar() {
    this.resposta = this.num1 * this.num2;
  }

  public dividir() {
    this.resposta = this.num1 / this.num2;
  }
}
