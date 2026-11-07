import type { RouteKey } from '../i18n/routes';
import HomeView from './HomeView.astro';
import TripsView from './TripsView.astro';
import TailorMadeView from './TailorMadeView.astro';
import AboutView from './AboutView.astro';
import ReviewsView from './ReviewsView.astro';
import FaqView from './FaqView.astro';
import ContactView from './ContactView.astro';
import WishlistView from './WishlistView.astro';
import CreditsView from './CreditsView.astro';
import PrivacyView from './PrivacyView.astro';
import TermsView from './TermsView.astro';
import CancellationView from './CancellationView.astro';

/** Which view renders each page key. Add a page here and in i18n/routes.ts. */
export const views: Partial<Record<RouteKey, (props: any) => any>> = {
  home: HomeView,
  trips: TripsView,
  tailorMade: TailorMadeView,
  about: AboutView,
  reviews: ReviewsView,
  faq: FaqView,
  contact: ContactView,
  wishlist: WishlistView,
  credits: CreditsView,
  privacy: PrivacyView,
  terms: TermsView,
  cancellation: CancellationView,
};
