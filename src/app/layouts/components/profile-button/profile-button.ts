import { Component, HostListener, signal } from '@angular/core';
import { LucideBolt, LucideCircleUserRound, LucideLogOut, LucideUserPen } from '@lucide/angular';

@Component({
  selector: 'app-profile-button',
  imports: [LucideCircleUserRound, LucideLogOut, LucideBolt, LucideUserPen],
  templateUrl: './profile-button.html',
})
export class ProfileButton {
  isOpen = signal(false);

  toggle(): void {
    this.isOpen.set(!this.isOpen());
  }

  close(): void {
    this.isOpen.set(false);
  }

  logout(): void {
    //TODO: add logout and token cleaning
    this.close();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-profile-button')) {
      this.close();
    }
  }
}
