import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorNavigationComponent } from './donor-navigation.component';

describe('DonorNavigationComponent', () => {
  let component: DonorNavigationComponent;
  let fixture: ComponentFixture<DonorNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
