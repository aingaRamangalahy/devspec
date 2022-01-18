import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedDefaultComponent } from './feed-default/feed-default.component';
import { FeedCardGridComponent } from './feed-card-grid/feed-card-grid.component';
import { FeedCardListComponent } from './feed-card-list/feed-card-list.component';


@NgModule({
  declarations: [
    FeedDefaultComponent,
    FeedCardGridComponent,
    FeedCardListComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
