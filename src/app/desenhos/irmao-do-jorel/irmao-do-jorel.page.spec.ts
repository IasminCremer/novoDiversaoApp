import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrmaoDoJorelPage } from './irmao-do-jorel.page';

describe('IrmaoDoJorelPage', () => {
  let component: IrmaoDoJorelPage;
  let fixture: ComponentFixture<IrmaoDoJorelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrmaoDoJorelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrmaoDoJorelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
