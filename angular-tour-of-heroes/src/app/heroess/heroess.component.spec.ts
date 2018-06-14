import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroessComponent } from './heroess.component';

describe('HeroessComponent', () => {
  let component: HeroessComponent;
  let fixture: ComponentFixture<HeroessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
