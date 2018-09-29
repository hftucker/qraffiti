export default ({
  context,
  pixel,
  pixels,
  canvasSize,
  eyeColors,
  pixelColors,
}) => {
  const size = canvasSize / pixels.length;
  const {x, y} = pixel;
  context.fillRect(x * size - size / 2, y * size - size / 2, size, size);
};
