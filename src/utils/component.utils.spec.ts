import { cmp } from './component.utils'

describe('cmp', () => {
  // Generates a component with the correct file name
  it('should generate a component with the correct file name when a valid component name is provided', () => {
    // Arrange
    const componentName = 'testComponent'

    // Act
    const result = cmp(componentName)

    // Assert
    expect(result.templateUrl).toBe('testComponent.component.html')
    expect(result.styleUrl).toBe('testComponent.component.scss')
  })

  // Handles empty string as file name
  it('should throw an error when an empty string is provided as the component name', () => {
    // Arrange
    const componentName = ''

    // Act & Assert
    expect(() => cmp(componentName)).toThrow(
      '[cmp::cmp@9] Got empty component name to generate'
    )
  })
})
