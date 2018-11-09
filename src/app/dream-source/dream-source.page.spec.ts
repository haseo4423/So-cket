import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamSourcePage } from './dream-source.page';

describe('DreamSourcePage', () => {
  let component: DreamSourcePage;
  let fixture: ComponentFixture<DreamSourcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamSourcePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamSourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
