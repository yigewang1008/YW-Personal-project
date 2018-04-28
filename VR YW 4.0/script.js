// // Component to change to a sequential color on click.
// AFRAME.registerComponent('cursor-listener', {
//   init: function () {
//     var lastIndex = -1;
//     var COLORS = ['red', 'green', 'blue'];
//     this.el.addEventListener('click', function (evt) {
//       lastIndex = (lastIndex + 1) % COLORS.length;
//       this.setAttribute('material', 'color', COLORS[lastIndex]);
//       console.log('I was clicked at: ', evt.detail.intersection.point);
//     });
//   }
// });
// Component to change to a sequential color on click.
// AFRAME.registerComponent('cursor-listener', {
//   init: function () {
//
//     this.el.addEventListener('click', function (evt) {
//
//       this.setAttribute('material', 'color', 'pink');
//       console.log('I was clicked at: ', evt.detail.intersection.point);
//     });
//   }
// });
