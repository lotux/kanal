angular.module('app.controllers', [])
  
.controller('contactsCtrl', function($scope) {

})
   
.controller('channelsCtrl', function($scope) {
        $scope.channelGroups = [
            "خرید، فروش و تعمیر خودرو",
            " خرید،فروش، اجاره ملک",
            " خدمات آموزشی",
            " رستوران، کافی شاپ و نهیه غذا",
            " بیمارستان و مطب پزشکان",
            " آژانسهای مسافرتی",
            " استخدام و کاریابی",
            " کارخانه جات و مراکز صنعتی",
            " خدمات منزل",
            " فروشگاههای کالای دیجیتال",
            " فروشگاههای لوارم خانگی",
            " فروشگاههای لوازم بهداشتی و آرایشی",
            " فروشگاههای پوشاک و البسه",
            " فروشگاههای کتاب",
            " فروشگاههای نرم افزار و بازی",
            "کانال های  عمومی"
        ];

        $scope.maskanTypes= [
            "آپارتمان",
            "ویلا - باغچه",
            "زمین",
            "کلنگی",
            "کارگاه - کارخانه - سوله"
        ];

        $scope.moameleTypes= [
            "خرید",
            "رهن و اجاره"
        ];

    })

.controller('channelsByCategoryCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
      
.controller('page5Ctrl', function($scope) {
        $scope.availableColors= [
            "سفید",
           "مشکی"
        ];

        $scope.count = [
            1,2,3,4,5,6,7,8,10
        ];
        $scope.garanty= [
            "نمایندگی رسمی",
            "صام سرویس"
        ];

        $scope.items = [
            {
                src:'img/ER2kA2vLRMmMruuNd3gB_samsung_s6.jpg',
                sub: 'Samsung Galaxy S6'
            },
            {
                src:'http://file.digikala.com/Digikala/Image/Webstore/ProductPhoto/P_67296/Original/4f6f71.jpg',
                sub: '' /* Not showed */
            },
            {
                src:'http://file.digikala.com/Digikala/Image/Webstore/ProductPhoto/P_67296/Original/22db34.jpg',
                thumb:'http://file.digikala.com/Digikala/Image/Webstore/ProductPhoto/P_67296/Original/22db34.jpg'
            }
        ]

    })

.controller('mainCtrl', function($scope, $timeout, $ionicModal, $ionicSideMenuDelegate) {
        $scope.toggleLeftSideBar = function(){
            $ionicSideMenuDelegate.toggleLeft();
        }


    })

