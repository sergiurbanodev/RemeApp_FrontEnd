import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarBackground } from '@layouts/components/star-background/star-background';
import { NavBar } from '@layouts/components/nav-bar/nav-bar';
import { ProfileButton } from '@layouts/components/profile-button/profile-button';
import { Footer } from '@layouts/components/footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [NavBar, RouterOutlet, StarBackground, ProfileButton, Footer],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
