import { TestBed } from '@angular/core/testing'
import { UserService } from "./user.service";

// describe create a test suite with a given name
describe('UserService', () => {

  let service: UserService;     // this is just a variable(not property) without any value

  // we will grab service from TestBed API, this is main API we using to write unit test in angular
  // with TestBed API we have a method which we can call over function which is called inject (acts like DI) so that we can grab instance of UserService where we call methods on
  
  // for each test case we create we need a fresh instance of a service
  beforeEach(() => {
    // specify what we want to do before each test starts
    // in beforeEach we can executes some code before each test, in our case we want to grab a fresh instance of service for each test

    TestBed.configureTestingModule({});    // which will configure our testing environment
    service = TestBed.inject(UserService);   // inject an instance of UserService into our testing environment
  })
  // beforeEach executes code before each test so that we have 4 unit test for each unit test beforeEach will get called before test is getting executed
  
  // Unit test 1 -> if we have a instance
  it('should be created', () => {
    expect(service).toBeTruthy();            // yes we have an instance
  })
  

  // Unit test 2 ->
  it('should get Users', () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    })
  })
});
