import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapitaMarvelPage } from './capita-marvel.page';

describe('CapitaMarvelPage', () => {
  let component: CapitaMarvelPage;
  let fixture: ComponentFixture<CapitaMarvelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitaMarvelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapitaMarvelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
