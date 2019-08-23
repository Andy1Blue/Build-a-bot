function applyStyle(element, binding) {
  Object.keys(binding.modifiers).forEach((key) => {
    element.style[key] = '5px';
  });
  element.style.position = 'absolute';
  // element.style.bottom = '5px';
  // element.style.right = '5px';
}

export default {
  bind: (element, binding) => {
    // if (binding.arg !== 'position') return;
    applyStyle(element, binding);
  },
  // updated directive, for example to "hot" update module on site
  update: (element, binding) => {
    applyStyle(element, binding);
  },
};
