import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Declaração de variáveis 
  public calculo = ''; // vazia
  public resultado: string; // null

  private ponto = false; // boolean

  public operacao = false;
  public operacoes = ["+", "-", "*", "/",]; // Array


  constructor(public alertController: AlertController) {
  }

  // Função para adicionar números no cálculo
  public addNum(num: string) {
    if (this.resultado) {
      this.apagarTudo()
    }
    this.calculo = this.calculo + num;
  }

  // Função para adicionar pontos no cálculo
  public addPonto() {
    if (this.ponto) {
      return;
    }

    this.calculo += ".";
    this.ponto = true;
  }

  // Função para adicionar símbolos matemáticos no cálculo
  public addOpe(operador: string) {

    // Verificar se o resultado não é nulo para igualar o cálculo no resultado
    if (this.resultado) {
      this.calculo = this.resultado.toString();
      this.resultado = null;
    }

    // Verificar se o ultimo caracter não é um símbolo
    const ultimo = this.calculo.slice(-1);
    if (this.operacoes.indexOf(ultimo) > -1) {
      return;
    }

    this.calculo += operador;
    this.ponto = false;
  }

  // Função para apagar todos os caracteres do cálculo
  public apagarTudo() {
    this.calculo = "";
    this.resultado = null;
    this.ponto = false;
  }

  // Função para apagar apenas o ultimo caracter do cálculo
  public apagarUltimo() {
    const ultimo = this.calculo.slice(-1);
    if (ultimo == '.') {
      this.ponto = false;
    }

    this.calculo = this.calculo.slice(0, -1);
  }

  // Função para realizar o cálculo ou aparecer a mensagem de erro
  public calcularResultado() {
    try {
      this.resultado = evaluate(this.calculo);
    } catch (e) {
      this.resultado = '';
      this.presentAlert('ERRO!!!', 'Cálculo inválido, verifique!')
    }

  }

  // Utilização do ion-alert para à aparição da mensagem de erro
  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

} 
