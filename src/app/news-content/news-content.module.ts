import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsContentPageRoutingModule } from './news-content-routing.module';

import { NewsContentPage } from './news-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsContentPageRoutingModule
  ],
  declarations: [NewsContentPage]
})
export class NewsContentPageModule {}
