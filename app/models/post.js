import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  image: DS.attr(),
  owner: DS.attr(),
  teaser: DS.attr(),
  title: DS.attr()
});
// 'string', {defaultValue: 'https://typeset-beta.imgix.net/2017/1/10/474390681.jpg?w=740&h=437&fit=crop&crop=faces&auto=format&q=70'}
// https://typeset-beta.imgix.net/2017/1/10/474390681.jpg?w=740&h=437&fit=crop&crop=faces&auto=format&q=70
