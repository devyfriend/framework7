(function framework7ComponentLoader(o,e){void 0===e&&(e=!0);document,window;var t=o.$,p=(o.Template7,o.utils),a=(o.device,o.support),s=(o.Class,o.Modal),r=(o.ConstructorMethods,o.ModalMethods),n=function(o){function e(e,s){var r=p.extend({on:{}},e.params.popup,s);o.call(this,e,r);var n,l,i,c,u=this;if(u.params=r,(n=u.params.el?t(u.params.el).eq(0):t(u.params.content).filter(function(o,e){return 1===e.nodeType}).eq(0))&&n.length>0&&n[0].f7Modal)return n[0].f7Modal;if(0===n.length)return u.destroy();function d(o){var p=o.target,a=t(p);if(!(!e.device.desktop&&e.device.cordova&&(window.Keyboard&&window.Keyboard.isVisible||window.cordova.plugins&&window.cordova.plugins.Keyboard&&window.cordova.plugins.Keyboard.isVisible))&&0===a.closest(u.el).length&&u.params&&u.params.closeByBackdropClick&&u.params.backdrop&&u.backdropEl&&u.backdropEl===p){var s=!0;u.$el.nextAll(".popup.modal-in").each(function(o,e){var t=e.f7Modal;t&&t.params.closeByBackdropClick&&t.params.backdrop&&t.backdropEl===u.backdropEl&&(s=!1)}),s&&u.close()}}function m(o){27===o.keyCode&&u.params.closeOnEscape&&u.close()}function h(o){return(e.height-2*o)/e.height}u.params.backdrop&&u.params.backdropEl?l=t(u.params.backdropEl):u.params.backdrop&&0===(l=e.root.children(".popup-backdrop")).length&&(l=t('<div class="popup-backdrop"></div>'),e.root.append(l)),p.extend(u,{app:e,push:n.hasClass("popup-push")||u.params.push,$el:n,el:n[0],$backdropEl:l,backdropEl:l&&l[0],type:"popup",$htmlEl:t("html")});var f,v,w,y,b,g,k,C,E,T,M,$=!0,B=!1,x=!1;function H(o){!B&&$&&u.params.swipeToClose&&(u.params.swipeHandler&&0===t(o.target).closest(u.params.swipeHandler).length||(B=!0,x=!1,f={x:"touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,y:"touchstart"===o.type?o.targetTouches[0].pageY:o.pageY},y=p.now(),w=void 0,u.params.swipeHandler||"touchstart"!==o.type||(g=t(o.target).closest(".page-content")[0])))}function O(o){if(B){if(v={x:"touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,y:"touchmove"===o.type?o.targetTouches[0].pageY:o.pageY},void 0===w&&(w=!!(w||Math.abs(v.x-f.x)>Math.abs(v.y-f.y))),w)return B=!1,void(x=!1);b=f.y-v.y,c&&i&&b>0&&(b=0);var t=b<0?"to-bottom":"to-top";if(n.transition(0),"string"!=typeof u.params.swipeToClose||t===u.params.swipeToClose){if(!x){if(c&&i&&(T=n[0].offsetHeight,M=e.root.children(".view, .views")),g&&(k=g.scrollTop,E=g.scrollHeight,C=g.offsetHeight,!(E===C||"to-bottom"===t&&0===k||"to-top"===t&&k===E-C)))return n.transform(""),B=!1,void(x=!1);x=!0}if(o.preventDefault(),c&&i){var p=1-Math.abs(b/T),a=1-(1-h(i))*p;M.transition(0).transform("translate3d(0,0,0) scale("+a+")")}n.transition(0).transform("translate3d(0,"+-b+"px,0)")}else n.transform("")}}function K(){if(B=!1,x){x=!1,$=!1,n.transition(""),c&&i&&M.transition("").transform("");var o=b<=0?"to-bottom":"to-top";if("string"==typeof u.params.swipeToClose&&o!==u.params.swipeToClose)return n.transform(""),void($=!0);var e=Math.abs(b),t=(new Date).getTime()-y;t<300&&e>20||t>=300&&e>100?p.nextTick(function(){"to-bottom"===o?n.addClass("swipe-close-to-bottom"):n.addClass("swipe-close-to-top"),n.transform(""),u.close(),$=!0}):($=!0,n.transform(""))}}var P=!!a.passiveListener&&{passive:!0};return u.params.swipeToClose&&(n.on(e.touchEvents.start,H,P),e.on("touchmove",O),e.on("touchend:passive",K),u.once("popupDestroy",function(){n.off(e.touchEvents.start,H,P),e.off("touchmove",O),e.off("touchend:passive",K)})),u.on("open",function(){u.params.closeOnEscape&&t(document).on("keydown",m),u.push&&(c=u.push&&(e.width<630||e.height<630||n.hasClass("popup-tablet-fullscreen"))),c&&(i=parseInt(n.css("--f7-popup-push-offset"),10),Number.isNaN(i)&&(i=0),i&&(n.addClass("popup-push"),u.$htmlEl.addClass("with-modal-popup-push"),u.$htmlEl[0].style.setProperty("--f7-popup-push-scale",h(i))))}),u.on("opened",function(){n.removeClass("swipe-close-to-bottom swipe-close-to-top"),u.params.closeByBackdropClick&&e.on("click",d)}),u.on("close",function(){u.params.closeOnEscape&&t(document).off("keydown",m),u.params.closeByBackdropClick&&e.off("click",d),c&&i&&(u.$htmlEl.removeClass("with-modal-popup-push"),u.$htmlEl.addClass("with-modal-popup-push-closing"))}),u.on("closed",function(){c&&i&&(u.$htmlEl.removeClass("with-modal-popup-push-closing"),u.$htmlEl[0].style.removeProperty("--f7-popup-push-scale"))}),n[0].f7Modal=u,u}return o&&(e.__proto__=o),e.prototype=Object.create(o&&o.prototype),e.prototype.constructor=e,e}(s),l={name:"popup",params:{popup:{backdrop:!0,backdropEl:void 0,closeByBackdropClick:!0,closeOnEscape:!1,swipeToClose:!1,swipeHandler:null,push:!1}},static:{Popup:n},create:function(){this.popup=r({app:this,constructor:n,defaultSelector:".popup.modal-in"})},clicks:{".popup-open":function(o,e){void 0===e&&(e={});this.popup.open(e.popup,e.animate)},".popup-close":function(o,e){void 0===e&&(e={});this.popup.close(e.popup,e.animate)}}};if(e){if(o.prototype.modules&&o.prototype.modules[l.name])return;o.use(l),o.instance&&(o.instance.useModuleParams(l,o.instance.params),o.instance.useModule(l))}return l}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
