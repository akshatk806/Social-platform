import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;  // Fixture in angular is like wrapper for our component which has additional functionality
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],    // in service testing we havn't define the declarations, but in component angular handles component, directive and pipe differntly in comparison to services
      providers: [UserService]
    }).compileComponents();


    fixture = TestBed.createComponent(UserListComponent);   // create a component of type UserListComponent
    component = fixture.componentInstance;
    
    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([      // chaining with the help of jasmine
      { id: 1, name: "Akshat" },
      { id: 2, name: "Shivam" }
    ]))
    // return mock data

    // why we need fixture? The component itself only gives us access to component properties and all of what's inside of the component but for our unit test we may be want to triggers some life cycle's or we want to trigger the change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // components itself get some users from service
  it('should retrieves users from the UerService on init', () => {
    fixture.detectChanges();                                    // start the life cycle hook ngOnInit and starts data binding
    expect(userServiceSpy).toHaveBeenCalled();        // we use userServiceSpy to check if getUsers() is called from our UserListComponent
  })

  // unit test for when we clicked on button, if this is button gets clicked, does the getUsers() method on the service will called
  it('should retrieves users from the UerService when the refresh button is clicked', () => {
    // 1. start lifecycle
    fixture.detectChanges();

    userServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));          // html button
    button.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled();
  })
});
