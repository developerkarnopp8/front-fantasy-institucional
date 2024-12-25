import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawdtxa: string = ' '
  raw70g7: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Tangible Absolute Mink')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Tangible Absolute Mink',
      },
    ])
  }
}
