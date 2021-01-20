import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';


@Component({
  selector: 'app-fotos-felinas',
  templateUrl: './fotos-felinas.component.html',
  styleUrls: ['./fotos-felinas.component.css']
})
export class FotosFelinasComponent implements OnInit {

  index = 0;
  cats: any = [];
  constructor(
    private catsService: CatsService
  ) { }

  ngOnInit(): void {
    this.get18Cats();

  }

  get18Cats() {
    this.catsService.get18pictures()
      .subscribe(cats => {
        this.cats = cats;
        console.log(this.cats);

      })
  }

  primero() {
    this.index = 0;
  }
  ultimo() {
    this.index = 17;
  }
  siguiente() {
    if (this.index == 17) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }
  anterior() {
    if (this.index == 0) {
      this.index = 17;
    }
    else {
      this.index--;
    }
  }




}
