(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = exports.HelloApp = exports.Linker = exports.Ciao = exports.Hello = undefined;

var _dec, _class, _dec2, _class2, _dec3, _dec4, _class3, _desc, _value, _class4, _descriptor, _dec5, _class6, _dec6, _class7; //setup app

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

//main entry

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

/*
//does not work with https://angular.io/docs/ts/latest/quickstart.html that it reqire shim. Since it typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
*/

},{"./app":1,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//simple class greeter

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcaW5kZXguanMiLCJzcmNcXHNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs4SENBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNYSxLLFdBQUEsSyxXQUpaLHFCQUFVO0FBQ1AsY0FBVSxPQURIO0FBRVAsY0FBVTtBQUZILENBQVYsQyxnQkFLRyxlQUFZLE9BQVosRUFBOEI7QUFBQTs7QUFDMUIsU0FBSyxPQUFMLEdBQWUsUUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixXQUFyQixDQUFmO0FBQ0gsQztpRUFIUSxLO0lBVUEsSSxXQUFBLEksWUFKWixxQkFBVTtBQUNQLGNBQVUsTUFESDtBQUVQLGNBQVU7QUFGSCxDQUFWLEMsa0JBS0csY0FBWSxPQUFaLEVBQThCLEtBQTlCLEVBQXFEO0FBQUE7O0FBQ2pELFNBQUssUUFBTCxHQUFnQixNQUFNLE1BQU4sQ0FDZixHQURlLENBQ1g7QUFBQSxlQUFVLFFBQVEsR0FBUixDQUFZLE1BQVosRUFBb0IsT0FBTyxJQUEzQixDQUFWO0FBQUEsS0FEVyxDQUFoQjtBQUVILEM7eUZBSlEsSTtJQVdBLE0sV0FBQSxNLFlBSloscUJBQVU7QUFDUCxjQUFVLFFBREg7QUFFUCxjQUFVO0FBRkgsQ0FBVixDLFVBS0ksa0IsNkJBRUQsZ0JBQStCLElBQS9CLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDSCxDOzs7b0JBSlEsRzs7O0FBRUkscUJBQVUsTUFBVixDLENBSEosTTtJQW1CQSxRLFdBQUEsUSxZQVhaLHFCQUFVO0FBQ1AsY0FBVSxXQURIO0FBRVA7QUFGTyxDQUFWLEM7Ozs7O0FBY0QsSUFBTSxVQUFVLHFCQUFhLE9BQWIsQ0FBcUIsQ0FDakMsRUFBRSxNQUFNLEVBQVIsRUFBWSxXQUFXLEtBQXZCLEVBRGlDLEVBRWpDLEVBQUUsTUFBTSxZQUFSLEVBQXNCLFdBQVcsSUFBakMsRUFGaUMsQ0FBckIsQ0FBaEI7O0lBc0JhLFMsV0FBQSxTLFlBakJaLG9CQUFTO0FBQ04sYUFBUyxpQ0FFTCxPQUZLLENBREg7QUFLTixrQkFBYyxDQUNWLFFBRFUsRUFFVixLQUZVLEVBR1YsSUFIVSxFQUlWLE1BSlUsQ0FMUjtBQVdOLGVBQVcsb0JBRVAsRUFBRSxpQ0FBRixFQUE2QixzQ0FBN0IsRUFGTyxDQVhMO0FBZU4sZUFBVyxDQUFDLFFBQUQ7QUFmTCxDQUFULEM7Ozs7Ozs7QUM1REQ7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBUEE7O0FBU0Esc0RBQXlCLGVBQXpCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0lBRWEsTyxXQUFBLE87Ozs7Ozs7NEJBQ0wsUSxFQUFVLEksRUFBTTtBQUNoQixnQkFBTSxjQUFjLEtBQUssVUFBTCxDQUFnQixRQUFoQixDQUFwQjtBQUNBLG1CQUFVLFdBQVYsVUFBMEIsSUFBMUI7QUFDSDs7O21DQUVVLEcsRUFBSztBQUNaLGdCQUFJLENBQUMsR0FBTCxFQUFVO0FBQ04sdUJBQU8sR0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBSSxPQUFKLENBQVksTUFBWixFQUFvQjtBQUFBLHVCQUFLLEVBQUUsV0FBRixFQUFMO0FBQUEsYUFBcEIsQ0FBUDtBQUNIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vc2V0dXAgYXBwXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHsgR3JlZXRlciB9IGZyb20gJy4vc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlbGxvJyxcclxuICAgIHRlbXBsYXRlOiAnPHA+e3sgbWVzc2FnZSB9fTwvcD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVsbG8ge1xyXG4gICAgY29uc3RydWN0b3IoZ3JlZXRlcjogR3JlZXRlcikge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGdyZWV0ZXIuc2F5KCdoZWxsbycsICdBbmd1bGFyIDInKTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NpYW8nLFxyXG4gICAgdGVtcGxhdGU6ICc8cD57eyBtZXNzYWdlJCB8IGFzeW5jIH19PC9wPicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaWFvIHtcclxuICAgIGNvbnN0cnVjdG9yKGdyZWV0ZXI6IEdyZWV0ZXIsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSQgPSByb3V0ZS5wYXJhbXNcclxuICAgICAgICAubWFwKHBhcmFtcyA9PiBncmVldGVyLnNheSgnY2lhbycsIHBhcmFtcy5uYW1lKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaW5rZXInLFxyXG4gICAgdGVtcGxhdGU6ICc8cD48YSBbaHJlZl09XCJ1cmxcIiBbdGl0bGVdPVwibmFtZVwiPnt7IG5hbWUgfX08L2E+PC9wPicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xyXG4gICAgQElucHV0KCkgdXJsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ25hbWUnKSBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlbGxvLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+SGVsbG8gZXM2PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9jaWFvJywgJ25nMiddXCI+Q2lhbzwvYT48L2xpPlxyXG5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgICA8bGlua2VyIG5hbWU9XCJHaXRIdWJcIiB1cmw9XCJodHRwczovL2dpdGh1Yi5jb20vc2h1aGVpL2JhYmVsLWFuZ3VsYXIyLWFwcFwiPjwvbGlua2VyPlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbGxvQXBwIHtcclxufVxyXG5cclxuY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogSGVsbG8gfSxcclxuICAgIHsgcGF0aDogJ2NpYW8vOm5hbWUnLCBjb21wb25lbnQ6IENpYW8gfSxcclxuXSk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgcm91dGluZyxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIZWxsb0FwcCxcclxuICAgICAgICBIZWxsbyxcclxuICAgICAgICBDaWFvLFxyXG4gICAgICAgIExpbmtlcixcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBHcmVldGVyLFxyXG4gICAgICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbSGVsbG9BcHBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG4iLCIvL21haW4gZW50cnlcclxuXHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG5cclxuLypcclxuLy9kb2VzIG5vdCB3b3JrIHdpdGggaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L3F1aWNrc3RhcnQuaHRtbCB0aGF0IGl0IHJlcWlyZSBzaGltLiBTaW5jZSBpdCB0eXBlc2NyaXB0XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgPGgxPkhlbGxvIHt7bmFtZX19PC9oMT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBuYW1lID0gJ0FuZ3VsYXInOyB9XHJcbiovXHJcbiIsIi8vc2ltcGxlIGNsYXNzIGdyZWV0ZXJcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmVldGVyIHtcclxuICAgIHNheShncmVldGluZywgbmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkID0gdGhpcy5jYXBpdGFsaXplKGdyZWV0aW5nKTtcclxuICAgICAgICByZXR1cm4gYCR7Y2FwaXRhbGl6ZWR9LCAke25hbWV9IWA7XHJcbiAgICB9XHJcblxyXG4gICAgY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgICAgICBpZiAoIXN0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oLikvLCBjID0+IGMudG9VcHBlckNhc2UoKSk7XHJcbiAgICB9XHJcbn1cclxuIl19