import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfhostelsComponent } from './list-ofhostels.component';

describe('ListOfhostelsComponent', () => {
  let component: ListOfhostelsComponent;
  let fixture: ComponentFixture<ListOfhostelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfhostelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfhostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
