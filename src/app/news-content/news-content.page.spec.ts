import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsContentPage } from './news-content.page';

describe('NewsContentPage', () => {
  let component: NewsContentPage;
  let fixture: ComponentFixture<NewsContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
