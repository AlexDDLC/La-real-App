import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalnotificationPage } from './modalnotification.page';

describe('ModalnotificationPage', () => {
  let component: ModalnotificationPage;
  let fixture: ComponentFixture<ModalnotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalnotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalnotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
