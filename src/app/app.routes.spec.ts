import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { appRoutes } from './app.routes';
import { MainComponent } from './main.component';
import { NotFoundComponent } from './notFound.component';
import { WelcomeComponent } from './module1/welcome.component';
import { ListComponent } from './module1/list.component';
import { DashboardComponent } from './module2/dashboard.component';
import { Dashboard1Component } from './module2/dashboard1.component';

describe('App routing', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(appRoutes)] });
    harness = await RouterTestingHarness.create();
  });

  it('should redirect the empty path to /welcome', async () => {
    const component = await harness.navigateByUrl('/', MainComponent);
    expect(component).toBeInstanceOf(MainComponent);
    expect(TestBed.inject(Router).url).toBe('/welcome');
  });

  it('should lazy-load module1 routes', async () => {
    expect(await harness.navigateByUrl('/module1/welcome', WelcomeComponent)).toBeInstanceOf(WelcomeComponent);
    expect(await harness.navigateByUrl('/module1/list', ListComponent)).toBeInstanceOf(ListComponent);
  });

  it('should lazy-load module2 routes', async () => {
    expect(await harness.navigateByUrl('/module2/dashboard', DashboardComponent)).toBeInstanceOf(DashboardComponent);
    expect(await harness.navigateByUrl('/module2/dashboard/1', Dashboard1Component)).toBeInstanceOf(Dashboard1Component);
  });

  it('should show NotFoundComponent for unknown paths', async () => {
    expect(await harness.navigateByUrl('/does-not-exist', NotFoundComponent)).toBeInstanceOf(NotFoundComponent);
  });
});
