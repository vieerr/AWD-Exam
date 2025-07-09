import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  imports: [CommonModule],
  templateUrl: './speedometer.html',
  styleUrls: ['./speedometer.css']
})
export class SpeedometerComponent {
  speed: number = 0;
  maxSpeed: number = 220;

  accelerate(): void {
    this.speed = Math.min(this.speed + 5, this.maxSpeed);
  }

  brake(): void {
    this.speed = Math.max(this.speed - 3, 0);
  }

  reset(): void {
    this.speed = 0;
  }

  getSpeedClass(): string {
    if (this.speed > 120) return 'danger-speed';
    if (this.speed > 70) return 'high-speed';
    if (this.speed > 30) return 'medium-speed';
    return 'low-speed';
  }

  getSpeedPercentage(): number {
    return (this.speed / this.maxSpeed) * 100;
  }
}