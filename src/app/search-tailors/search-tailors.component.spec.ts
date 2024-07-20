import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTailorsComponent } from './search-tailors.component';

describe('SearchTailorsComponent', () => {
  let component: SearchTailorsComponent;
  let fixture: ComponentFixture<SearchTailorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchTailorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTailorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
