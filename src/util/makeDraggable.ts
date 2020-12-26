/* eslint-disable import/prefer-default-export */
import * as d3 from 'd3';

export const makeDraggable = (component: Element) => {
  let translateX = 0;
  let translateY = 0;
  const handleDrag = d3.drag()
    .subject(() => ({ x: translateX, y: translateY }))
    .on('drag', function() {
      const { event } = d3 as any;
      const me = d3.select(this);
      translateX = event.x;
      translateY = event.y;
      const transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      me.style('transform', transform);
    })
    .on('end', () => {});
  handleDrag(d3.select(component));
};

export const makeWindowDraggable = (
  parent: Element,
  topbar: Element,
  resizers: {TL: Element, TR: Element, BL: Element, BR: Element},
) => {
  let translateX = 0;
  let translateY = 0;
  let topbarSelected = false;
  let resizerSelected = '';
  let xInitial = 0;
  let yInitial = 0;
  const handleDrag = d3.drag()
    .subject(() => ({ x: translateX, y: translateY }))
    .on('start', () => {
      const { event } = d3 as any;
      switch (event.sourceEvent.target) {
        case resizers.TL:
          resizerSelected = 'TL';
          xInitial = resizers.BR.getClientRects()[0].x;
          yInitial = resizers.BR.getClientRects()[0].y;
          break;
        case resizers.TR:
          xInitial = resizers.BL.getClientRects()[0].x;
          yInitial = resizers.BL.getClientRects()[0].y;
          resizerSelected = 'TR';
          break;
        case resizers.BL:
          xInitial = resizers.TR.getClientRects()[0].x;
          yInitial = resizers.TR.getClientRects()[0].y;
          resizerSelected = 'BL';
          break;
        case resizers.BR:
          resizerSelected = 'BR';
          break;
        case ((topbar || topbar.children[0])):
          topbarSelected = true;
          break;
        default:
          break;
      }
    })
    .on('drag', () => {
      const { event } = d3 as any;
      const me = d3.select(parent);
      if (topbarSelected) {
        translateX = Math.max(event.x);
        translateY = Math.max(event.y);
        const transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        me.style('transform', transform);
      }

      if (resizerSelected === 'TL') {
        const transform = `translate3d(${event.x}px, ${event.y}px, 0)`;
        me.style('transform', transform);
        const { clientX: xPos1, clientY: yPos1 } = event.sourceEvent;
        me.style('height', `${yInitial - yPos1}px`);
        me.style('width', `${xInitial - xPos1}px`);
        translateX = Math.max(event.x);
        translateY = Math.max(event.y);
      }

      if (resizerSelected === 'TR') {
        const transform = `translate3d(${translateX}px, ${event.y}px, 0)`;
        me.style('transform', transform);
        const { clientX: xPos1, clientY: yPos1 } = event.sourceEvent;
        me.style('height', `${yInitial - yPos1}px`);
        me.style('width', `${xPos1 - xInitial}px`);
        translateY = Math.max(event.y);
      }

      if (resizerSelected === 'BL') {
        const transform = `translate3d(${event.x}px, ${translateY}px, 0)`;
        me.style('transform', transform);
        const { clientX: xPos1, clientY: yPos1 } = event.sourceEvent;
        me.style('height', `${yPos1 - yInitial}px`);
        me.style('width', `${xInitial - xPos1}px`);
        translateX = Math.max(event.x);
      }

      if (resizerSelected === 'BR') {
        const { x: xPos1, y: yPos1 } = resizers.TL.getClientRects()[0];
        const { clientX: xPos2, clientY: yPos2 } = event.sourceEvent;
        me.style('height', `${yPos2 - yPos1}px`);
        me.style('width', `${xPos2 - xPos1}px`);
      }
    })
    .on('end', () => {
      topbarSelected = false;
      resizerSelected = '';
    });
  handleDrag(d3.select(parent));
};
