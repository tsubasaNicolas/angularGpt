import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarMenuItemComponent } from '../../components/sidebarMenuItem/sidebarMenuItem.component';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarMenuItemComponent],
  templateUrl: './dashboardLayout.component.html',
  styleUrl: './dashboardLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  public routes = routes[0].children?.filter((route) => route.data);
  @ViewChild('hamburgerBtn') hamburgerBtn!: ElementRef;
  menuOpen = false;
  isSmallScreen = false;

  constructor(private eRef: ElementRef) {}

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 640; // sm breakpoint
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth < 640;
      if (!this.isSmallScreen) {
        this.menuOpen = false; // cerrar menú si se agranda
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  handleItemClick() {
    if (this.isSmallScreen) {
      this.menuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInsideNav = this.eRef.nativeElement
      .querySelector('nav')
      ?.contains(event.target as Node);
    const clickedHamburger = this.hamburgerBtn?.nativeElement.contains(
      event.target as Node
    );

    if (
      this.isSmallScreen &&
      this.menuOpen &&
      !clickedInsideNav &&
      !clickedHamburger
    ) {
      this.menuOpen = false;
    }
  }
}
