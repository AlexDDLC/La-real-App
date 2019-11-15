import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalsecurityPage } from './modalsecurity.page';

describe('ModalsecurityPage', () => {
  let component: ModalsecurityPage;
  let fixture: ComponentFixture<ModalsecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsecurityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalsecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
