import app from 'flarum/forum/app';
import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import TrustLevel from '../common/models/TrustLevel';
import UserPage from 'flarum/forum/components/UserPage';
import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import { levelPage } from './components/levelPage';

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
});
