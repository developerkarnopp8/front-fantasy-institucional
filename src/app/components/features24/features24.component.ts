import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features24',
  templateUrl: 'features24.component.html',
  styleUrls: ['features24.component.css'],
})
export class Features24 {
  @Input()
  feature1ImgAlt: string = 'Icon for feature 1'
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1552250575-e508473b090f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1Mnx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1400'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @Input()
  feature3ImgAlt: string = 'Icon for feature 3'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400'
  @Input()
  feature2ImgAlt: string = 'Icon for feature 2'
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  activeTab: number = 0
  constructor() {}
}
