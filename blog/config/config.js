angular.module('myBlog', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('sam', {
            parent: 'site',
            url: '/sam',
            views: {
                'content@': {
                    template: '<h1>hello from sam</h1>'
                }
            }
        });
});