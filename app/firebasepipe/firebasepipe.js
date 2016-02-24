"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
(function (ALLOWED_FIREBASE_EVENTS) {
    ALLOWED_FIREBASE_EVENTS[ALLOWED_FIREBASE_EVENTS["value"] = 0] = "value";
    ALLOWED_FIREBASE_EVENTS[ALLOWED_FIREBASE_EVENTS["child_added"] = 1] = "child_added";
})(exports.ALLOWED_FIREBASE_EVENTS || (exports.ALLOWED_FIREBASE_EVENTS = {}));
var ALLOWED_FIREBASE_EVENTS = exports.ALLOWED_FIREBASE_EVENTS;
;
var FirebaseEventPipe = (function () {
    function FirebaseEventPipe(cdRef) {
        this._cdRef = cdRef;
    }
    FirebaseEventPipe.prototype.transform = function (value, args) {
        var _this = this;
        if (!this._fbRef) {
            this._fbRef = new Firebase(value);
            var event_1 = this._getEventFromArgs(args);
            if (ALLOWED_FIREBASE_EVENTS[event_1] == ALLOWED_FIREBASE_EVENTS.child_added) {
                this._fbRef.on(event_1, function (snapshot) {
                    if (!_this._latestValue)
                        _this._latestValue = [];
                    _this._latestValue.push(snapshot.val());
                    _this._cdRef.markForCheck();
                });
            }
            else {
                this._fbRef.on(event_1, function (snapshot) {
                    _this._latestValue = snapshot.val();
                    _this._cdRef.markForCheck();
                });
            }
            return null;
        }
        if (this._latestValue === this._latestReturnedValue) {
            return this._latestValue;
        }
        else {
            this._latestReturnedValue = this._latestValue;
            return core_1.WrappedValue.wrap(this._latestReturnedValue);
        }
    };
    FirebaseEventPipe.prototype.onDestroy = function () {
        if (this._fbRef) {
            this._fbRef.off();
        }
    };
    FirebaseEventPipe.prototype._getEventFromArgs = function (args) {
        if (args[0] && args[0][0] === '"') {
            args[0] = args[0].replace(/"/g, '');
        }
        if (args && typeof ALLOWED_FIREBASE_EVENTS[args[0]] === 'number') {
            return args[0];
        }
        throw "Not a valid event to listen to: " + args[0] + ".\n      Please provide a valid event, such as \"child_added\", by adding it as an\n      argument to the pipe: \"value | firebase:child_added\".\n      See https://www.firebase.com/docs/web/api/query/on.html for supported events.";
    };
    FirebaseEventPipe = __decorate([
        core_1.Pipe({
            name: 'firebaseevent',
            pure: false
        }),
        __param(0, core_1.Inject(core_1.ChangeDetectorRef)), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], FirebaseEventPipe);
    return FirebaseEventPipe;
}());
exports.FirebaseEventPipe = FirebaseEventPipe;
