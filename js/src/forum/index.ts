import app from 'flarum/forum/app';
import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import TrustLevel from '../common/models/TrustLevel';
import UserPage from 'flarum/forum/components/UserPage';
import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import { levelPage } from './components/levelPage';
import levelChangeNotification from './notification/levelChangeNotification';
import NotificationGrid from 'flarum/forum/components/NotificationGrid';

app.initializers.add('xypp/flarum-trust-levels', () => {
  User.prototype.trustLevel = Model.hasOne<TrustLevel>('trustLevel') as any;
  app.routes['user.trust-level'] = {
    path: '/u/:username/trust-level',
    component: levelPage,
  };

  extend(UserPage.prototype, 'navItems', function (items) {
    if (app.session.user) {
      items.add(
        'trust-levels',
        LinkButton.component(
          {
            href: app.route('user.trust-level', { username: this.user?.username() }),
            icon: 'fas fa-layer-group',
          },
          [
            app.translator.trans('xypp-trust-levels.forum.nav-title')
          ]
        ),
        10
      );
    }
  });
  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('trust_level_change', {
      name: 'trust_level_change',
      icon: 'fas fa-layer-group',
      label: app.translator.trans('xypp-trust-levels.forum.notification.name')
    });
  });

  app.notificationComponents.trust_level_change = levelChangeNotification;
});
