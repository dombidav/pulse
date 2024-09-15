import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NxWelcomeComponent } from './nx-welcome.component'
import { PrimeNGConfig } from 'primeng/api'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly primeNGConfig = inject(PrimeNGConfig)
  title = 'pulse'

  constructor() {
    this.primeNGConfig.ripple = true
  }
}
