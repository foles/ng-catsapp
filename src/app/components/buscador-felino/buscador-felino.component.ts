import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';


@Component({
  selector: 'app-buscador-felino',
  templateUrl: './buscador-felino.component.html',
  styleUrls: ['./buscador-felino.component.css']
})
export class BuscadorFelinoComponent implements OnInit {

  cats = [];
  selectedCat;


  constructor(
    private catsService: CatsService
  ) { }

  ngOnInit(): void {
    this.getCats();

  }


  getCats() {
    this.catsService.getAllCats()
      .subscribe(cats => {
        this.cats = cats;


      })
  }

  selected() {
    console.log(this.selectedCat);


  }




}
