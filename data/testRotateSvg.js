function getMatrixForRotation(a, cx, cy) {
  var ca = Math.cos((a * Math.PI) / 180);
  var sa = Math.sin((a * Math.PI) / 180);

  var a = ca.toFixed(4);
  var b = sa.toFixed(4);
  var c = (-sa).toFixed(4);
  var d = ca.toFixed(4);
  var e = (-ca * cx + sa * cy + cx).toFixed(4);
  var f = (-sa * cx - ca * cy + cy).toFixed(4);

  return 'matrix(' + [a, b, c, d, e, f].join(' ') + ')';
}

var matrix = getMatrixForRotation(45, 250, 250);

document.getElementById('id').setAttribute('transform', matrix);
