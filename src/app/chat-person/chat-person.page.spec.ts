import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatPersonPage } from './chat-person.page';

describe('ChatPersonPage', () => {
  let component: ChatPersonPage;
  let fixture: ComponentFixture<ChatPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
