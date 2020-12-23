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
      // /callback(translateX, translateY);
    })
    .on('end', () => {});
  handleDrag(d3.select(component));
};

export const makeWindowDraggable = (parent: Element, topbar: Element, callback?: any) => {
  let translateX = 0;
  let translateY = 0;
  let topbarSelected = false;
  const handleDrag = d3.drag()
    .subject(() => ({ x: translateX, y: translateY }))
    .on('start', () => {
      const { event } = d3 as any;
      if ((event.sourceEvent.target === topbar)
      || (event.sourceEvent.target === topbar.children[0])) {
        topbarSelected = true;
      }
    })
    .on('drag', () => {
      const { event } = d3 as any;
      if (topbarSelected) {
        const me = d3.select(parent);
        translateX = event.x;
        translateY = event.y;
        const transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        me.style('transform', transform);
      }
    })
    .on('end', () => {
      topbarSelected = false;
    });
  handleDrag(d3.select(parent));
};
