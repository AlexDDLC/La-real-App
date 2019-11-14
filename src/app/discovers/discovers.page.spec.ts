import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscoversPage } from './discovers.page';

describe('DiscoversPage', () => {
  let component: DiscoversPage;
  let fixture: ComponentFixture<DiscoversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoversPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
