import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuntionComponent } from './funtion.component';

describe('FuntionComponent', () => {
  let component: FuntionComponent;
  let fixture: ComponentFixture<FuntionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuntionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuntionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
