import { Component } from '@angular/core';

@Component({
  selector: 'app-star-background',
  imports: [],
  templateUrl: './star-background.html',
  styleUrl: './star-background.css',
})
export class StarBackground {
  stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 3,
    opacity: Math.random() * 0.8 + 0.2,
  }));
}
