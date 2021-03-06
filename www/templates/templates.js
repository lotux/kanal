<ion-view ng-controller="channelsCtrl">
    <ion-content overflow-scroll="true" padding="false" class="has-header">
        <h2>کانال جدید</h2>
        <form ng-submit="createTask(task)">
            <div class="list">
                <label class="item item-input item-floating-label">
                    <span class="input-label">آی دی منحصربفرد کانال - فقط اعداد و حروف انگلیسی</span>
                    <input type="text" placeholder="آی دی منحصربفرد کانال - فقط اعداد و حروف انگلیسی" ng-model="channel.name">
                </label>
                <label class="item item-input item-floating-label">
                    <span class="input-label">عنوان کانال(مثلا نام شرکت، فروشگاه یا ... ارایه دهنده سرویس)</span>
                    <input type="text" placeholder="عنوان کانال(مثلا نام شرکت، فروشگاه یا ... ارایه دهنده سرویس)" ng-model="channel.title" >
                </label>
                <label class="item item-input item-floating-label">
                    <span class="input-label">آدرس</span>
                    <input type="text" placeholder="آدرس" ng-model="channel.address" >
                </label>
                <label class="item item-input item-floating-label">
                    <span class="input-label">تلفن</span>
                    <input type="text" placeholder="تلفن" ng-model="channel.phone" >
                </label>
                <label class="item item-input item-floating-label">
                    <span class="input-label">توضیحات</span>
                    <input type="text" placeholder=" چه خدمات یا محصولاتی ارایه می کنید - توضیحات" ng-model="channel.desc" >
                </label>

                <button class="button button-positive" modal-select="" ng-model="selectedChannelGroup" options="selectables" modal-title="گروه کانال را انتخاب کنید">گروه کانال را انتخاب نمایید<div class="option">
                        {{option}}
                    </div>
                </button>
                    <label class="item item-input">
                        <span class="input-label">آدرس</span> {{selectedChannelGroup}}
                    </label>


            </div>
            <div class="padding">
                <button type="submit" class="button button-block button-positive">Create task</button>
            </div>
        </form>
    </ion-content>
</ion-view>
