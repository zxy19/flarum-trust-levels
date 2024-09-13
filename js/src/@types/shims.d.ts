import Post from 'flarum/common/models/Post';
import User from 'flarum/common/models/User';
import TrustLevel from '../common/models/TrustLevel';

declare module 'flarum/common/models/User' {
    export default interface User {
        trustLevel(): TrustLevel | undefined;
    }
}