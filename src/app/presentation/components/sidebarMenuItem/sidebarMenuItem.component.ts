import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item',
  imports: [
    RouterModule,
    //CommonModule
  ],
  template: `
    <a
      [routerLink]="path"
      (click)="onClick()"
      routerLinkActive="bg-gray-800"
      class="flex justify-center item-center hover:bg-gray-800 rounded-m2 p-2 transition-color"
    >
      <i class="{{ icon }} text-2xl mr-4 text-indigo-400"></i>

      <div class="flex flex-col flex-grow">
        <span class="text-white text-lg font-semibold">{{ title }}</span>
        <span class="text-gray-400 text-sm">{{ description }}</span>
      </div>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuItemComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) path!: string;

  @Output() itemClicked = new EventEmitter<void>();

  onClick() {
    this.itemClicked.emit(); // solo emite, no maneja lógica
  }
}
