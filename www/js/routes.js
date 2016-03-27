angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            .state('tabsController.contacts', {
                url: '/contacts',
                views: {
                    'tab1': {
                        templateUrl: 'templates/contacts.html',
                        controller: 'contactsCtrl'
                    }
                }
            })

            .state('tabsController.channels', {
                url: '/channels',
                views: {
                    'tab2': {
                        templateUrl: 'templates/channels.html',
                        controller: 'channelsCtrl'
                    }
                }
            })

            .state('tabsController.newChannel', {
                url: '/newChannel',
                views: {
                    'general': {
                        templateUrl: 'templates/newChannel.html',
                        controller: 'channelsCtrl'
                    }
                }
            })

            .state('tabsController.channelsByCategory', {
                url: '/channelsByCategory',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/channelsByCategory.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })


            .state('tabsController.settings', {
                url: '/settings',
                views: {
                    'general': {
                        templateUrl: 'templates/settings.html',
                        controller: 'settingsCtrl'
                    }
                }
            })

            .state('tabsController', {
                url: '/page1',
                templateUrl: 'templates/tabsController.html',
                abstract: true
            })

            .state('tabsController.page5', {
                url: '/kalamala',
                views: {
                    'tab2': {
                        templateUrl: 'templates/page5.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

	.state('tabsController.joinedChannels', {
                url: '/joinedChannels',
                views: {
                    'tab2': {
                        templateUrl: 'templates/joinedChannels.html',
                        controller: 'page5Ctrl'
                    }
                }
            })


	    .state('tabsController.kalamalaItems', {
                url: '/kalamalaItems',
                views: {
                    'tab2': {
                        templateUrl: 'templates/kalamalaItems.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

            .state('tabsController.maskan', {
                url: '/maskan',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/maskan.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

            .state('tabsController.userComment', {
                url: '/userComment',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/userComment.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

            .state('tabsController.digitalStores', {
                url: '/digitalStores',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/digitalStores.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

            .state('tabsController.digitalSearch', {
                url: '/digitalSearch',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/digitalSearch.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

            .state('tabsController.maskanItem1', {
                url: '/maskanItem1',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/maskanItem1.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

            .state('tabsController.apartment1', {
                url: '/apartment1',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/apartment1.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

            .state('tabsController.maskanSearch', {
                url: '/maskan/search',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/maskanSearch.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

      .state('tabsController.login', {
                url: '/login',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/login.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })
   .state('tabsController.registration', {
                url: '/registration',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/registration.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })
   .state('tabsController.kalamalaBasket', {
                url: '/kalamalaBasket',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/kalamalaBasket.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

   .state('tabsController.addressVerification', {
                url: '/addressVerification',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/addressVerification.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })
   .state('tabsController.payMethod', {
                url: '/payMethod',
                views: {
                    'channelsByCategory': {
                        templateUrl: 'templates/payMethod.html',
                        controller: 'channelsByCategoryCtrl'
                    }
                }
            })

        $urlRouterProvider.otherwise('/page1/joinedChannels')


    });
