import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-navbar8',
  templateUrl: 'navbar8.component.html',
  styleUrls: ['navbar8.component.css'],
})
export class Navbar8 {
  @Input()
  linkUrlPage4: string = 'https://www.teleporthq.io'
  @Input()
  link2Url: string = 'https://www.teleporthq.io'
  @ContentChild('page4Description')
  page4Description: TemplateRef<any>
  @Input()
  page1ImageSrc: string =
    'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400'
  @ContentChild('action1')
  action1: TemplateRef<any>
  @Input()
  page2ImageAlt: string = 'image'
  @ContentChild('link2')
  link2: TemplateRef<any>
  @Input()
  linkUrlPage2: string = 'https://www.teleporthq.io'
  @Input()
  logoAlt: string = 'logo'
  @Input()
  logoSrc: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
  @Input()
  page3ImageAlt: string = 'image'
  @Input()
  linkUrlPage1: string = 'https://www.teleporthq.io'
  @ContentChild('page1')
  page1: TemplateRef<any>
  @ContentChild('link1')
  link1: TemplateRef<any>
  @Input()
  page4ImageSrc: string =
    'https://images.unsplash.com/photo-1605745141160-8892dc674e94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400'
  @Input()
  linkUrlPage3: string = 'https://www.teleporthq.io'
  @ContentChild('page4')
  page4: TemplateRef<any>
  @ContentChild('page2')
  page2: TemplateRef<any>
  @ContentChild('link4')
  link4: TemplateRef<any>
  @Input()
  page4ImageAlt: string = 'image'
  @ContentChild('page1Description')
  page1Description: TemplateRef<any>
  @Input()
  page2ImageSrc: string =
    'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400'
  @Input()
  page3ImageSrc: string =
    'https://images.unsplash.com/photo-1524448789231-1bb0771e7d45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400'
  @ContentChild('page2Description')
  page2Description: TemplateRef<any>
  @ContentChild('link3')
  link3: TemplateRef<any>
  @ContentChild('page3')
  page3: TemplateRef<any>
  @Input()
  link1Url: string = 'https://www.teleporthq.io'
  @ContentChild('page3Description')
  page3Description: TemplateRef<any>
  @Input()
  page1ImageAlt: string = 'image'
  @ContentChild('action2')
  action2: TemplateRef<any>
  @Input()
  link3Url: string = 'https://www.teleporthq.io'
  link5AccordionOpen: boolean = false
  link5DropdownVisible: boolean = false
  constructor() {}
}
