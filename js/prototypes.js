Phone.prototype.firstUsed = function () {
  this.counter = 1;
};

Phone.prototype.usePhone = function () {
  this.counter++;
};

Phone.prototype.showUsage = function () {
  console.log('Phone brand ' + this.brand + ' was used ' + this.counter + ' times.');
};

(function () {
  'use strict';

  iPhone6S.firstUsed();
  for (var i = 0; i < 10; i++) {
    iPhone6S.usePhone();
  }

  iPhone6S.showUsage();
})();
