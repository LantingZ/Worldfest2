/*(function() {
  var globe = planetaryjs.planet();
  globe.loadPlugin(autorotate(10));
  globe.loadPlugin(planetaryjs.plugins.earth({
    topojson: { file:   '/world.json' },
    oceans:   { fill:   '#4A9FE8' },
    land:     { fill:   '22B03E' },
    borders:  { stroke: '#2E2E2E' }
  }));
  globe.loadPlugin(lakes({
    fill: '#4A9FE8'
  }));
  globe.projection.scale(175).translate([175, 175]).rotate([0, -10, 0]);

  var canvas = document.getElementById('rotatingGlobe');
  if (window.devicePixelRatio == 2) {
    canvas.width = 800;
    canvas.height = 800;
    context = canvas.getContext('2d');
    context.scale(2, 2);
  }
  globe.draw(canvas);

  function autorotate(degPerSec) {
    return function(planet) {
      var lastTick = null;
      var paused = false;
      planet.plugins.autorotate = {
        pause:  function() { paused = true;  },
        resume: function() { paused = false; }
      };
      planet.onDraw(function() {
        if (paused || !lastTick) {
          lastTick = new Date();
        } else {
          var now = new Date();
          var delta = now - lastTick;
          var rotation = planet.projection.rotate();
          rotation[0] += degPerSec * delta / 1000;
          if (rotation[0] >= 180) rotation[0] -= 360;
          planet.projection.rotate(rotation);
          lastTick = now;
        }
      });
    };
  };

  function lakes(options) {
    options = options || {};
    var lakes = null;

    return function(planet) {
      planet.onInit(function() {
        var world = planet.plugins.topojson.world;
        lakes = topojson.feature(world, world.objects.ne_110m_lakes);
      });

      planet.onDraw(function() {
        planet.withSavedContext(function(context) {
          context.beginPath();
          planet.path.context(context)(lakes);
          context.fillStyle = options.fill || 'blue';
          context.fill();
        });
      });
    };
  };
})();
*/