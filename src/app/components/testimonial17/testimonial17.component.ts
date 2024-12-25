import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-testimonial17',
  templateUrl: 'testimonial17.component.html',
  styleUrls: ['testimonial17.component.css'],
})
export class Testimonial17 {
  @ContentChild('author2Position')
  author2Position: TemplateRef<any>
  @ContentChild('author1Position')
  author1Position: TemplateRef<any>
  @Input()
  author3Alt: string = 'Alice Johnson - Founder, Startup123'
  @ContentChild('author1Name')
  author1Name: TemplateRef<any>
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200'
  @ContentChild('author3Name')
  author3Name: TemplateRef<any>
  @ContentChild('review2')
  review2: TemplateRef<any>
  @ContentChild('author2Name')
  author2Name: TemplateRef<any>
  @ContentChild('author4Position')
  author4Position: TemplateRef<any>
  @ContentChild('author4Name')
  author4Name: TemplateRef<any>
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200'
  @Input()
  author1Alt: string = 'John Doe - CEO, Company ABC'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200'
  @Input()
  author2Alt: string = 'Jane Smith - Marketing Manager, Company XYZ'
  @Input()
  author4Alt: string = 'Michael Brown - CTO, Tech Solutions Ltd.'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('author3Position')
  author3Position: TemplateRef<any>
  @ContentChild('review1')
  review1: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('review3')
  review3: TemplateRef<any>
  @ContentChild('review4')
  review4: TemplateRef<any>
  constructor() {}
}
