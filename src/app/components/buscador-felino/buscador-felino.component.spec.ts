import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorFelinoComponent } from './buscador-felino.component';

describe('BuscadorFelinoComponent', () => {
  let component: BuscadorFelinoComponent;
  let fixture: ComponentFixture<BuscadorFelinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorFelinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorFelinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
