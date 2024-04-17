export const getClientPositions = (event: MouseEvent | TouchEvent | DragEvent) => {
  const posX = event instanceof TouchEvent ? event.touches[0].pageX : event.clientX
  const posY = event instanceof TouchEvent ? event.touches[0].pageY : event.clientY
  return { posX, posY }
}
