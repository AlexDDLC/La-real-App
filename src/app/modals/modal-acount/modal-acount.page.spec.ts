import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAcountPage } from './modal-acount.page';

describe('ModalAcountPage', () => {
  let component: ModalAcountPage;
  let fixture: ComponentFixture<ModalAcountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAcountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAcountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
