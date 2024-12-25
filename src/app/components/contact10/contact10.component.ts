import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact10',
  templateUrl: 'contact10.component.html',
  styleUrls: ['contact10.component.css'],
})
export class Contact10 {
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  location2ImageSrc: string =
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400'
  @Input()
  location1ImageSrc: string =
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400'
  @ContentChild('location1Description')
  location1Description: TemplateRef<any>
  @Input()
  location2ImageAlt: string = 'Support Center Image'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('location2Description')
  location2Description: TemplateRef<any>
  @Input()
  location1ImageAlt: string = 'Main Office Image'
  @ContentChild('location1')
  location1: TemplateRef<any>
  @ContentChild('location2')
  location2: TemplateRef<any>
  constructor() {}
}
