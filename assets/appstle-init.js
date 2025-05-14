(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.defer = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("body")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0085/4641/8752/t/43/assets/appstle-subscription.js?v=1687312004");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "true",
        "atcButtonSelector": "",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "laylo-pets.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Choose Your Plan",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Monthly Plan",
        "sellingPlanSelectTitle": "PAYMENT DETAILS",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Subscription detail",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your subscriptions<\/strong><br\/><br\/>Cancel anytime!",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Your Plan",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : true,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/month",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Payment Plan","frequencyDescription":"2 monthly payments of $265","discountOffer":265.0,"afterCycle1":0,"discountType":"PRICE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/1540915386","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"maxCycles":2,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/1540915386","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"[]","frequencySequence":0,"groupName":"Homeschool Premium: 4-Week Payment Plan","appstleCycles":[]},{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly","frequencyDescription":"\u003cb\u003e7-day Free Trial.\u003c/b\u003e Billed monthly. Cancel anytime.","discountOffer":0.0,"discountOffer2":0.0,"afterCycle1":0,"afterCycle2":1,"discountType":"PRICE","discountType2":"PERCENTAGE","discountEnabled":true,"discountEnabled2":true,"discountEnabledMasked":true,"discountEnabled2Masked":true,"id":"gid://shopify/SellingPlan/1541013690","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/1541013690","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":true,"freeTrialCount":7,"freeTrialInterval":"DAY","memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","frequencySequence":0,"groupName":"Homeschool Lite: Monthly Plan","appstleCycles":[]},{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Payment Plan","frequencyDescription":"2 monthly payments of $550","discountOffer":550.0,"afterCycle1":0,"discountType":"PRICE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/1549107386","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"maxCycles":2,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/1549107386","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"[]","frequencySequence":0,"groupName":"Homeschool Premium: 8-Week Payment Plan","appstleCycles":[]}],
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{secondSellingPlanPrice}}\/month)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : " {{totalPrice}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 163,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": true,
        "appstlePlanName": "BUSINESS",
        "appstlePlanFeatures": {
	"accessAdvancedCustomerPortalSettings": false,
	"accessAdvanceSubscriptionPlanOptions": true,
	"accessAppstleMenu": true,
	"accessBuildABox": true,
	"accessBundling": true,
	"accessDiscountOnCancellationAttempt": true,
	"accessKlaviyoContactSync": true,
	"accessKlaviyoEmailIntegration": true,
	"accessGorgiasIntegration": true,
	"accessMechanicsIntegration": true,
	"accessZapierIntegration": true,
	"accessShopifyFlowIntegration": true,
	"accessManualSubscriptionCreation": true,
	"accessOneTimeProductUpsells": true,
	"accessQuickCheckout": true,
	"accessResendEmail": true,
	"accessSplitContract": true,
	"accessSubscriberLoyaltyFeatures": true,
	"accessSubscriptionActivityLogs": true,
	"accessWidgetDesignOptions": true,
	"analytics": true,
	"enableAdvancedSellingPlans": true,
	"enableAutomation": true,
	"enableAutoSync": false,
	"enableBundling": true,
	"enableCancellationManagement": true,
	"enableCartWidget": true,
	"enableCustomEmailDomain": true,
	"enableCustomEmailHtml": true,
	"enableCustomerPortalSettings": true,
	"enableDunningManagement": true,
	"enableExternalApi": false,
	"enableIntegrations": true,
	"enableProductSwapAutomation": false,
	"enableQuickActions": true,
	"enableShippingProfiles": true,
	"enableSmsAlert": true,
	"enableSubscriptionManagement": true,
	"enableSummaryReports": true,
	"enableWidgetPlacement": true,
	"subscriptionOrderAmount": 100000,
	"webhookAccess": false
},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetTemplateHtml": `{% raw %}{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.noSubscriptionLabelTextV2\":\"No Subscription\",\"appstle.subscription.wg.cancelAnytimeLabelTextV2\":\"Cancel Anytime\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Weeks\",\"appstle.subscription.wg.weeklyLabelTextV2\":\"Weekly\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Delivery Every\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Subscribe\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Days\",\"appstle.subscription.wg.monthlyLabelTextV2\":\"Monthly\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Subscribe success\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"Month\",\"appstle.subscription.wg.yearsFrequencyTextV2\":\"Years\",\"appstle.subscription.wg.onetimeDescriptionTextV2\":\"\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Week\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px; flex-shrink: 0; margin-right: 10px;'><img style='width: 100%' src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.widgetVariantChangeListenerSelectorV2\":\"\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"One Time\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"day\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"false\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"Months\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"Year\",\"appstle.subscription.wg.prepayLabelTextV2\":\"Prepay\",\"appstle.subscription.wg.productPageUnitPriceSelectorV2\":\"\",\"appstle.subscription.wg.widgetPriceChangeListenerSelectorV2\":\"\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"select deliver option\",\"appstle.subscription.wg.yearlyLabelTextV2\":\"Yearly\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "#AddToCartForm--template--16126229807290__main > div.product__submit__holder.product__submit__holder--notification > div.product__submit__buttons > div > #appstle_subscription_widget0 > div.appstle_subscription_wrapper > div:nth-child(1) {\ndisplay: none;\n}\n\n.appstleLoyaltyTable {\n    display: none;\n}\n\nspan.appstle_subscription_compare_amount.transcy-money {\n    display: none;\n}",
            "elementCSS": "[]",
            "customerPortalCss": "",
            "priceSelector": "appstle",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

