// sections.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Section1Component from './section1/section1.component';
import Section2Component from './section2/section2.component';
import Section3Component from './section3/section3.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [Section1Component, Section2Component, Section3Component, RedesSocialesComponent],
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export default class SectionsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    
  }
}
