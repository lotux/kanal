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
                    'home': {
                        templateUrl: 'templates/contacts.html',
                        controller: 'contactsCtrl'
                    }
                }
            })

            .state('tabsController.channels', {
                url: '/channels',
                views: {
                    'home': {
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

            .state('tabsController.home', {
                url: '/home',
                views: {
                    'home': {
                        templateUrl: 'templates/home.html',
                        controller: 'page5Ctrl'
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
                    'home': {
                        templateUrl: 'templates/page5.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

	.state('tabsController.joinedChannels', {
                url: '/joinedChannels',
                views: {
                    'home': {
                        templateUrl: 'templates/joinedChannels.html',
                        controller: 'page5Ctrl'
                    }
                }
            })


	    .state('tabsController.kalamalaItems', {
                url: '/kalamalaItems',
                views: {
                    'home': {
                        templateUrl: 'templates/kalamalaItems.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

            .state('tabsController.maskan', {
                url: '/maskan',
                views: {
                    'home': {
                        templateUrl: 'templates/maskan.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

            .state('tabsController.userComment', {
                url: '/userComment',
                views: {
                    'home': {
                        templateUrl: 'templates/userComment.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

            .state('tabsController.digitalStores', {
                url: '/digitalStores',
                views: {
                    'home': {
                        templateUrl: 'templates/digitalStores.html',
                        controller: 'page5Ctrl'
                    }
                }
            })
            .state('tabsController.search', {
                url: '/search',
                views: {
                    'search': {
                        templateUrl: 'templates/search.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

            .state('tabsController.digitalSearch', {
                url: '/digitalSearch',
                views: {
                    'home': {
                        templateUrl: 'templates/digitalSearch.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

            .state('tabsController.maskanItem1', {
                url: '/maskanItem1',
                views: {
                    'home': {
                        templateUrl: 'templates/maskanItem1.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

            .state('tabsController.apartment1', {
                url: '/apartment1',
                views: {
                    'home': {
                        templateUrl: 'templates/apartment1.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

            .state('tabsController.maskanSearch', {
                url: '/maskan/search',
                views: {
                    'home': {
                        templateUrl: 'templates/maskanSearch.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

      .state('tabsController.login', {
                url: '/login',
                views: {
                    'home': {
                        templateUrl: 'templates/login.html',
                        controller: 'page5Ctrl'
                    }
                }
            })
   .state('tabsController.registration', {
                url: '/registration',
                views: {
                    'home': {
                        templateUrl: 'templates/registration.html',
                        controller: 'page5Ctrl'
                    }
                }
            })
   .state('tabsController.kalamalaBasket', {
                url: '/kalamalaBasket',
                views: {
                    'home': {
                        templateUrl: 'templates/kalamalaBasket.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

   .state('tabsController.addressVerification', {
                url: '/addressVerification',
                views: {
                    'home': {
                        templateUrl: 'templates/addressVerification.html',
                        controller: 'page5Ctrl'
                    }
                }
            })
   .state('tabsController.payMethod', {
                url: '/payMethod',
                views: {
                    'home': {
                        templateUrl: 'templates/payMethod.html',
                        controller: 'page5Ctrl'
                    }
                }
            })
   .state('tabsController.chat', {
                url: '/chat',
                views: {
                    'chat': {
                        templateUrl: 'templates/chat.html',
                        controller: 'page5Ctrl'
                    }
                }
            })

        $urlRouterProvider.otherwise('/page1/channels')


    });
