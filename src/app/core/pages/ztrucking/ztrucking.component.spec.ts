import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtruckingComponent } from './ztrucking.component';

describe('ZtruckingComponent', () => {
  let component: ZtruckingComponent;
  let fixture: ComponentFixture<ZtruckingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZtruckingComponent]
    });
    fixture = TestBed.createComponent(ZtruckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
