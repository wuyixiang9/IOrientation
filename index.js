function DeviceOrientation () {
  this.value = null

  var self = this

  var supportOrientation = (typeof window.orientation == "number" && typeof window.onorientationchange == "object");

  var updateOrientation = function () {
    if (supportOrientation) {
      updateOrientation = function () {
        var orientation = window.orientation;
        switch (orientation) {
          case 90:
          case -90:
            orientation = "landscape";
            break;
          default:
            orientation = "portrait";
        }
        self.value = orientation
        self.onChange.call(null, orientation)
      };
    } else {
      updateOrientation = function () {
        var orientation = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait";
        if (orientation !== self.value) {
          self.value = orientation
          self.onChange.call(null, orientation)
        }
      };
    }
    updateOrientation();
  };

  var init = function () {
    updateOrientation();
    if (supportOrientation) {
      window.addEventListener("orientationchange", updateOrientation, false);
    } else {
      window.setInterval(updateOrientation, 0);
    }
  };

  init()
}

DeviceOrientation.prototype.onChange = function () {

}


module.exports = window.DeviceOrientation = DeviceOrientation