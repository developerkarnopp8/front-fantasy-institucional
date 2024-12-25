import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Navbar8 } from './navbar8/navbar8.component'
import { Hero17 } from './hero17/hero17.component'
import { CTA26 } from './cta26/cta26.component'
import { Steps2 } from './steps2/steps2.component'
import { Contact10 } from './contact10/contact10.component'
import { Features24 } from './features24/features24.component'
import { Footer4 } from './footer4/footer4.component'
import { Pricing14 } from './pricing14/pricing14.component'
import { Features25 } from './features25/features25.component'
import { Testimonial17 } from './testimonial17/testimonial17.component'

@NgModule({
  declarations: [
    Navbar8,
    Hero17,
    CTA26,
    Steps2,
    Contact10,
    Features24,
    Footer4,
    Pricing14,
    Features25,
    Testimonial17,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Navbar8,
    Hero17,
    CTA26,
    Steps2,
    Contact10,
    Features24,
    Footer4,
    Pricing14,
    Features25,
    Testimonial17,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
