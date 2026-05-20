import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarBackground } from '@layouts/components/star-background/star-background';
import { NavBar } from '@shared/nav-bar/nav-bar';
import { ProfileButton } from '@shared/profile-button/profile-button';

@Component({
  selector: 'app-main-layout',
  imports: [NavBar, RouterOutlet, StarBackground, ProfileButton],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
