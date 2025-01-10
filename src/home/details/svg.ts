export function addPathLine(svgElment, x1, y1, x2, y2) {
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M${x1} ${y1}h${x2}`);
  path.setAttribute('stroke', 'green');
  path.setAttribute('stroke-width', '2px');
  svgElment.append(path);
  return path;
}
