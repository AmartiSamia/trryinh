import type { RouteKey } from '../i18n/routes';
import HomeView from './HomeView.astro';
import TripsView from './TripsView.astro';

/** Which view renders each page key. Add a page here and in i18n/routes.ts. */
export const views: Partial<Record<RouteKey, (props: any) => any>> = {
  home: HomeView,
  trips: TripsView,
};
