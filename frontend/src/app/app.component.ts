import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html', //donde renderiza el html
  styleUrl: './app.component.css' //donde renderiza el css
})
export class AppComponent implements OnInit {
  title = 'Angular 17 App';
  city = 'Quito';

  ngOnInit() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn?.addEventListener('click', this.toggleDarkMode);
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }

}
