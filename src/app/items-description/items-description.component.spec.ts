import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDescriptionComponent } from './items-description.component';

describe('ItemsDescriptionComponent', () => {
  let component: ItemsDescriptionComponent;
  let fixture: ComponentFixture<ItemsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
