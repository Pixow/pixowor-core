import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixoworCoreComponent } from './pixowor-core.component';

describe('PixoworCoreComponent', () => {
  let component: PixoworCoreComponent;
  let fixture: ComponentFixture<PixoworCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixoworCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixoworCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
