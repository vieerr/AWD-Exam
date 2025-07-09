import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpeedometerComponent } from "./speedometer/speedometer";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpeedometerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Paspuel_Olivier_Ex2_Contador';
}
