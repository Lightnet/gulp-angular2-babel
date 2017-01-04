(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = exports.HelloApp = exports.Linker = exports.Ciao = exports.Hello = undefined;

var _dec, _class, _dec2, _class2, _dec3, _dec4, _class3, _desc, _value, _class4, _descriptor, _dec5, _class6, _dec6, _class7;

var _core = require('@angular/core');

var _common = require('@angular/common');

var _platformBrowser = require('@angular/platform-browser');

var _router = require('@angular/router');

require('rxjs/add/operator/map');

var _services = require('./services');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hello = exports.Hello = (_dec = (0, _core.Component)({
    selector: 'hello',
    template: '<p>{{ message }}</p>'
}), _dec(_class = function Hello(greeter) {
    _classCallCheck(this, Hello);

    this.message = greeter.say('hello', 'Angular 2');
}) || _class);
Reflect.defineMetadata('design:paramtypes', [_services.Greeter], Hello);
var Ciao = exports.Ciao = (_dec2 = (0, _core.Component)({
    selector: 'ciao',
    template: '<p>{{ message$ | async }}</p>'
}), _dec2(_class2 = function Ciao(greeter, route) {
    _classCallCheck(this, Ciao);

    this.message$ = route.params.map(function (params) {
        return greeter.say('ciao', params.name);
    });
}) || _class2);
Reflect.defineMetadata('design:paramtypes', [_services.Greeter, _router.ActivatedRoute], Ciao);
var Linker = exports.Linker = (_dec3 = (0, _core.Component)({
    selector: 'linker',
    template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>'
}), _dec4 = (0, _core.Input)(), _dec3(_class3 = (_class4 = function Linker(name) {
    _classCallCheck(this, Linker);

    _initDefineProp(this, 'url', _descriptor, this);

    this.name = name;
}, (_descriptor = _applyDecoratedDescriptor(_class4.prototype, 'url', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return this.url;
    }
})), _class4)) || _class3);
(0, _core.Attribute)('name')(Linker, null, 0);
var HelloApp = exports.HelloApp = (_dec5 = (0, _core.Component)({
    selector: 'hello-app',
    template: '\n        <ul>\n            <li><a [routerLink]="[\'/\']">Hello es6</a></li>\n            <li><a [routerLink]="[\'/ciao\', \'ng2\']">Ciao</a></li>\n\n            <router-outlet></router-outlet>\n            <linker name="GitHub" url="https://github.com/shuhei/babel-angular2-app"></linker>\n    '
}), _dec5(_class6 = function HelloApp() {
    _classCallCheck(this, HelloApp);
}) || _class6);


var routing = _router.RouterModule.forRoot([{ path: '', component: Hello }, { path: 'ciao/:name', component: Ciao }]);

var AppModule = exports.AppModule = (_dec6 = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule, routing],
    declarations: [HelloApp, Hello, Ciao, Linker],
    providers: [_services.Greeter, { provide: _common.LocationStrategy, useClass: _common.HashLocationStrategy }],
    bootstrap: [HelloApp]
}), _dec6(_class7 = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class7);

},{"./services":3,"@angular/common":"@angular/common","@angular/core":"@angular/core","@angular/platform-browser":"@angular/platform-browser","@angular/router":"@angular/router","rxjs/add/operator/map":"rxjs/add/operator/map"}],2:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app');

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

},{"./app":1,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Greeter = exports.Greeter = function () {
  function Greeter() {
    _classCallCheck(this, Greeter);
  }

  _createClass(Greeter, [{
    key: "say",
    value: function say(greeting, name) {
      var capitalized = this.capitalize(greeting);
      return capitalized + ", " + name + "!";
    }
  }, {
    key: "capitalize",
    value: function capitalize(str) {
      if (!str) {
        return str;
      }
      return str.replace(/^(.)/, function (c) {
        return c.toUpperCase();
      });
    }
  }]);

  return Greeter;
}();

},{}]},{},[2])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcaW5kZXguanMiLCJzcmNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTWEsSyxXQUFBLEssV0FKWixxQkFBVTtBQUNQLGNBQVUsT0FESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEMsZ0JBS0csZUFBWSxPQUFaLEVBQThCO0FBQUE7O0FBQzFCLFNBQUssT0FBTCxHQUFlLFFBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsV0FBckIsQ0FBZjtBQUNILEM7aUVBSFEsSztJQVVBLEksV0FBQSxJLFlBSloscUJBQVU7QUFDUCxjQUFVLE1BREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDLGtCQUtHLGNBQVksT0FBWixFQUE4QixLQUE5QixFQUFxRDtBQUFBOztBQUNqRCxTQUFLLFFBQUwsR0FBZ0IsTUFBTSxNQUFOLENBQ2YsR0FEZSxDQUNYO0FBQUEsZUFBVSxRQUFRLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLE9BQU8sSUFBM0IsQ0FBVjtBQUFBLEtBRFcsQ0FBaEI7QUFFSCxDO3lGQUpRLEk7SUFXQSxNLFdBQUEsTSxZQUpaLHFCQUFVO0FBQ1AsY0FBVSxRQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQyxVQUtJLGtCLDZCQUVELGdCQUErQixJQUEvQixFQUFxQztBQUFBOztBQUFBOztBQUNqQyxTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0gsQzs7O29CQUpRLEc7OztBQUVJLHFCQUFVLE1BQVYsQyxDQUhKLE07SUFtQkEsUSxXQUFBLFEsWUFYWixxQkFBVTtBQUNQLGNBQVUsV0FESDtBQUVQO0FBRk8sQ0FBVixDOzs7OztBQWNELElBQU0sVUFBVSxxQkFBYSxPQUFiLENBQXFCLENBQ2pDLEVBQUUsTUFBTSxFQUFSLEVBQVksV0FBVyxLQUF2QixFQURpQyxFQUVqQyxFQUFFLE1BQU0sWUFBUixFQUFzQixXQUFXLElBQWpDLEVBRmlDLENBQXJCLENBQWhCOztJQXNCYSxTLFdBQUEsUyxZQWpCWixvQkFBUztBQUNOLGFBQVMsaUNBRUwsT0FGSyxDQURIO0FBS04sa0JBQWMsQ0FDVixRQURVLEVBRVYsS0FGVSxFQUdWLElBSFUsRUFJVixNQUpVLENBTFI7QUFXTixlQUFXLG9CQUVQLEVBQUUsaUNBQUYsRUFBNkIsc0NBQTdCLEVBRk8sQ0FYTDtBQWVOLGVBQVcsQ0FBQyxRQUFEO0FBZkwsQ0FBVCxDOzs7Ozs7O0FDNUREOztBQUNBOztBQUVBOztBQUVBOztBQUVBLHNEQUF5QixlQUF6Qjs7Ozs7Ozs7Ozs7OztJQ1BhLE8sV0FBQSxPOzs7Ozs7O3dCQUNQLFEsRUFBVSxJLEVBQU07QUFDbEIsVUFBTSxjQUFjLEtBQUssVUFBTCxDQUFnQixRQUFoQixDQUFwQjtBQUNBLGFBQVUsV0FBVixVQUEwQixJQUExQjtBQUNEOzs7K0JBRVUsRyxFQUFLO0FBQ2QsVUFBSSxDQUFDLEdBQUwsRUFBVTtBQUNSLGVBQU8sR0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFJLE9BQUosQ0FBWSxNQUFaLEVBQW9CO0FBQUEsZUFBSyxFQUFFLFdBQUYsRUFBTDtBQUFBLE9BQXBCLENBQVA7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHsgR3JlZXRlciB9IGZyb20gJy4vc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlbGxvJyxcclxuICAgIHRlbXBsYXRlOiAnPHA+e3sgbWVzc2FnZSB9fTwvcD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVsbG8ge1xyXG4gICAgY29uc3RydWN0b3IoZ3JlZXRlcjogR3JlZXRlcikge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGdyZWV0ZXIuc2F5KCdoZWxsbycsICdBbmd1bGFyIDInKTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NpYW8nLFxyXG4gICAgdGVtcGxhdGU6ICc8cD57eyBtZXNzYWdlJCB8IGFzeW5jIH19PC9wPicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaWFvIHtcclxuICAgIGNvbnN0cnVjdG9yKGdyZWV0ZXI6IEdyZWV0ZXIsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSQgPSByb3V0ZS5wYXJhbXNcclxuICAgICAgICAubWFwKHBhcmFtcyA9PiBncmVldGVyLnNheSgnY2lhbycsIHBhcmFtcy5uYW1lKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaW5rZXInLFxyXG4gICAgdGVtcGxhdGU6ICc8cD48YSBbaHJlZl09XCJ1cmxcIiBbdGl0bGVdPVwibmFtZVwiPnt7IG5hbWUgfX08L2E+PC9wPicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xyXG4gICAgQElucHV0KCkgdXJsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ25hbWUnKSBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlbGxvLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+SGVsbG8gZXM2PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9jaWFvJywgJ25nMiddXCI+Q2lhbzwvYT48L2xpPlxyXG5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgICA8bGlua2VyIG5hbWU9XCJHaXRIdWJcIiB1cmw9XCJodHRwczovL2dpdGh1Yi5jb20vc2h1aGVpL2JhYmVsLWFuZ3VsYXIyLWFwcFwiPjwvbGlua2VyPlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbGxvQXBwIHtcclxufVxyXG5cclxuY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogSGVsbG8gfSxcclxuICAgIHsgcGF0aDogJ2NpYW8vOm5hbWUnLCBjb21wb25lbnQ6IENpYW8gfSxcclxuXSk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgcm91dGluZyxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIZWxsb0FwcCxcclxuICAgICAgICBIZWxsbyxcclxuICAgICAgICBDaWFvLFxyXG4gICAgICAgIExpbmtlcixcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBHcmVldGVyLFxyXG4gICAgICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbSGVsbG9BcHBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG4iLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcclxuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7XHJcblxyXG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwJztcclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuIiwiZXhwb3J0IGNsYXNzIEdyZWV0ZXIge1xyXG4gIHNheShncmVldGluZywgbmFtZSkge1xyXG4gICAgY29uc3QgY2FwaXRhbGl6ZWQgPSB0aGlzLmNhcGl0YWxpemUoZ3JlZXRpbmcpO1xyXG4gICAgcmV0dXJuIGAke2NhcGl0YWxpemVkfSwgJHtuYW1lfSFgO1xyXG4gIH1cclxuXHJcbiAgY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oLikvLCBjID0+IGMudG9VcHBlckNhc2UoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==