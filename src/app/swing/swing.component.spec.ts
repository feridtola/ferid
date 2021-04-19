import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingComponent } from './swing.component';

describe('SwingComponent', () => {
  let component: SwingComponent;
  let fixture: ComponentFixture<SwingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
