import { AppComponent } from "./app.component";

// unit test for app component
describe('AppComponent', () => {
  it('should have a defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  })
});