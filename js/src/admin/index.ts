import app from 'flarum/admin/app';
import adminPage from './components/adminPage';

app.initializers.add('xypp/flarum-trust-levels', () => {
  app.extensionData
    .for('xypp-trust-levels')
    .registerPage(adminPage);
});
