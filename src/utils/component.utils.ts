import { ChangeDetectionStrategy, Component } from '@angular/core'

/**
 * Generates an Angular component configuration object.
 *
 * @param {string} componentName - The base name of the component file (without extension).
 * @returns {Component} The Angular component configuration object.
 */
export function cmp(componentName: string): Component {
  if (!componentName)
    throw new Error('[cmp::cmp@9] Got empty component name to generate')
  return {
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `${componentName}.component.html`,
    styleUrl: `${componentName}.component.scss`,
  }
}
