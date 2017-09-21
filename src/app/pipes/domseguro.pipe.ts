import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'domseguro'
})

export class DomSeguroPipe implements PipeTransform {

    constructor(private domSanitizer: DomSanitizer) { }

    transform(value: string, url: string): any {
        debugger;

        return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    }
}