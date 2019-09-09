import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesuploadedComponent } from './filesuploaded.component';

describe('FilesuploadedComponent', () => {
  let component: FilesuploadedComponent;
  let fixture: ComponentFixture<FilesuploadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesuploadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesuploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
