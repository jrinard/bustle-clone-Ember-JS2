import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user-post', {path: '/user-post/:post_id'});
  this.route('post', {path: '/post/:post_id'});
  this.route('index2');
});

export default Router;
