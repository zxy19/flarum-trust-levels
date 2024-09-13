import Extend from 'flarum/common/extenders';
import TrustLevel from './models/TrustLevel';
export default [
    new Extend.Store()
        .add('trust-levels', TrustLevel)
];