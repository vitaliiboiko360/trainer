var TWallpaper = (function () {
  function x(a) {
    for (var b = [].concat(G); 0 < a; ) b.push(b.shift()), a--;
    a = [];
    for (var c = 0; c < b.length; c += 2) a.push(b[c]);
    return a;
  }
  function B(a, b) {
    b %= 90;
    var c = x(a % p);
    if (b) {
      var d = x(++a % p);
      return [
        {
          x: c[0].x + ((d[0].x - c[0].x) / 90) * b,
          y: c[0].y + ((d[0].y - c[0].y) / 90) * b,
        },
        {
          x: c[1].x + ((d[1].x - c[1].x) / 90) * b,
          y: c[1].y + ((d[1].y - c[1].y) / 90) * b,
        },
        {
          x: c[2].x + ((d[2].x - c[2].x) / 90) * b,
          y: c[2].y + ((d[2].y - c[2].y) / 90) * b,
        },
        {
          x: c[3].x + ((d[3].x - c[3].x) / 90) * b,
          y: c[3].y + ((d[3].y - c[3].y) / 90) * b,
        },
      ];
    }
    return c;
  }
  function H(a) {
    for (l += a; 90 <= l; ) (l -= 90), g++, g >= p && (g -= p);
    for (; 0 > l; ) (l += 90), g--, 0 > g && (g += p);
  }
  function I(a) {
    C += a.deltaY;
    D || (requestAnimationFrame(P), (D = !0));
  }
  function P() {
    var a = C / 50;
    C %= 50;
    if ((a = 0 < a ? Math.floor(a) : Math.ceil(a)))
      H(a), (a = B(g, l)), y(z(a));
    D = !1;
  }
  function Q() {
    if (0 < A.length) {
      var a = A.shift();
      y(a);
    } else clearInterval(E);
  }
  function z(a) {
    for (
      var b = f._hctx.createImageData(50, 50), c = b.data, d = 0, q = 0;
      50 > q;
      q++
    )
      for (var h = q / 50 - 0.5, F = h * h, v = 0; 50 > v; v++) {
        var m = v / 50 - 0.5,
          e = 0.35 * Math.sqrt(m * m + F);
        e = e * e * 6.4;
        var r = Math.sin(e),
          w = Math.cos(e);
        e = Math.max(0, Math.min(1, 0.5 + m * w - h * r));
        m = Math.max(0, Math.min(1, 0.5 + m * r + h * w));
        for (var J = (w = r = 0), K = 0, t = 0; t < u.length; t++) {
          var k = e - a[t].x,
            L = m - a[t].y;
          k = Math.max(0, 0.9 - Math.sqrt(k * k + L * L));
          k *= k * k * k;
          r += k;
          w += (k * u[t].r) / 255;
          J += (k * u[t].g) / 255;
          K += (k * u[t].b) / 255;
        }
        c[d++] = (w / r) * 255;
        c[d++] = (J / r) * 255;
        c[d++] = (K / r) * 255;
        c[d++] = 255;
      }
    return b;
  }
  function y(a) {
    f._hctx.putImageData(a, 0, 0);
    f._ctx.drawImage(f._hc, 0, 0, 50, 50);
  }
  function M() {
    var a = +Date.now();
    !document.hasFocus() ||
      a - N < R ||
      ((N = a), H(1), (a = B(g, l)), y(z(a)));
    O = requestAnimationFrame(M);
  }
  var g = 0,
    l = 0,
    N = 0,
    R = 1e3 / 15,
    A = [],
    E = null,
    O = null,
    u = [],
    n = [
      0, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      13, 14, 15, 16, 17, 18, 18.3, 18.6, 18.9, 19.2, 19.5, 19.8, 20.1, 20.4,
      20.7, 21, 21.3, 21.6, 21.9, 22.2, 22.5, 22.8, 23.1, 23.4, 23.7, 24, 24.3,
      24.6, 24.9, 25.2, 25.5, 25.8, 26.1, 26.3, 26.4, 26.5, 26.6, 26.7, 26.8,
      26.9, 27,
    ],
    G = [
      { x: 0.8, y: 0.1 },
      { x: 0.6, y: 0.2 },
      { x: 0.35, y: 0.25 },
      { x: 0.25, y: 0.6 },
      { x: 0.2, y: 0.9 },
      { x: 0.4, y: 0.8 },
      { x: 0.65, y: 0.75 },
      { x: 0.75, y: 0.4 },
    ],
    p = G.length,
    D = !1,
    C = 0,
    f = {
      init: function (a) {
        u = [];
        var b = a.getAttribute('data-colors') || '';
        b && (b = b.split(','));
        for (var c = 0; c < b.length; c++) {
          var d = u,
            q = d.push;
          var h = (h = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b[c]))
            ? {
                r: parseInt(h[1], 16),
                g: parseInt(h[2], 16),
                b: parseInt(h[3], 16),
              }
            : null;
          q.call(d, h);
        }
        f._hc ||
          ((f._hc = document.createElement('canvas')),
          (f._hc.width = 50),
          (f._hc.height = 50),
          (f._hctx = f._hc.getContext('2d')));
        f._canvas = a;
        f._ctx = f._canvas.getContext('2d');
        f.update();
      },
      update: function () {
        var a = B(g, l);
        y(z(a));
      },
      toNextPosition: function () {
        clearInterval(E);
        A = [];
        var a = x(g % p);
        g++;
        var b = x(g % p),
          c = (b[0].x - a[0].x) / 27,
          d = (b[0].y - a[0].y) / 27,
          q = (b[1].x - a[1].x) / 27,
          h = (b[1].y - a[1].y) / 27,
          F = (b[2].x - a[2].x) / 27,
          v = (b[2].y - a[2].y) / 27,
          m = (b[3].x - a[3].x) / 27;
        b = (b[3].y - a[3].y) / 27;
        for (var e = 0; 60 > e; e++)
          A.push(
            z([
              { x: a[0].x + c * n[e], y: a[0].y + d * n[e] },
              { x: a[1].x + q * n[e], y: a[1].y + h * n[e] },
              { x: a[2].x + F * n[e], y: a[2].y + v * n[e] },
              { x: a[3].x + m * n[e], y: a[3].y + b * n[e] },
            ])
          );
        E = setInterval(Q, 1e3 / 30);
      },
      animate: function (a) {
        a ? M() : cancelAnimationFrame(O);
      },
      scrollAnimate: function (a) {
        a
          ? document.addEventListener('wheel', I)
          : document.removeEventListener('wheel', I);
      },
    };
  return f;
})();
