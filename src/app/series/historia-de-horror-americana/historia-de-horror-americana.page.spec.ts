import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoriaDeHorrorAmericanaPage } from './historia-de-horror-americana.page';

describe('HistoriaDeHorrorAmericanaPage', () => {
  let component: HistoriaDeHorrorAmericanaPage;
  let fixture: ComponentFixture<HistoriaDeHorrorAmericanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaDeHorrorAmericanaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriaDeHorrorAmericanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
