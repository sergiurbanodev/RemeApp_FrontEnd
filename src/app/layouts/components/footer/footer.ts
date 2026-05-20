import { Component, computed } from '@angular/core';
import { LucideCreativeCommons } from '@lucide/angular';

@Component({
  selector: 'app-footer',
  imports: [LucideCreativeCommons],
  templateUrl: './footer.html',
})
export class Footer {
  year = computed<string>(() => {
    const date = new Date();

    return date.getFullYear().toString();
  });
}
