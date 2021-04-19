import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CathieComponent } from './cathie.component';

describe('CathieComponent', () => {
  let component: CathieComponent;
  let fixture: ComponentFixture<CathieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CathieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CathieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
