import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { NxWelcomeComponent } from './nx-welcome.component'
import { RouterModule } from '@angular/router'

describe('AppComponent', () => {
  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterModule.forRoot([])],
    }).compileComponents()
  })

  it('should render title', () => {
    // Arrange
    // Act
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()

    // Assert
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome pulse')
  })

  it(`should have as title 'pulse'`, () => {
    // Arrange
    // Act
    const fixture = TestBed.createComponent(AppComponent)

    //Assert
    const app = fixture.componentInstance
    expect(app.title).toEqual('pulse')
  })
})
