import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import AOS from 'aos';

AOS.init();

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
