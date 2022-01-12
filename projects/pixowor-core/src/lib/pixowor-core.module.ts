import { NgModule } from '@angular/core';
import { PixoworCoreComponent } from './pixowor-core.component';
import { HttpClientModule } from '@angular/common/http';
import PixowApi from 'pixow-api';

function initPixowApi() {
  return new PixowApi();
}

@NgModule({
  declarations: [PixoworCoreComponent],
  imports: [HttpClientModule],
  exports: [PixoworCoreComponent],
  providers: [
    {
      provide: PixowApi,
      useFactory: initPixowApi,
    },
  ],
})
export class PixoworCoreModule {}
