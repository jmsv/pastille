import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastilleComponent } from './pastille.component';

describe('PastilleComponent', () => {
  let component: PastilleComponent;
  let fixture: ComponentFixture<PastilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
