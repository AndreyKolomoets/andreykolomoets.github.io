import { modifier } from 'ember-modifier';

export default modifier(function animate(element, [animation, speed], hash) {
    const prefix = 'animate__';
    element.classList
    .forEach(
        (elementClass) => {
            if (elementClass.includes(prefix) && !elementClass.includes(`${prefix}animated`)) {
                console.log(`Remove class ${elementClass}`)
                element.classList.remove(elementClass);
            }
        }
      );

    element.classList.add(`${prefix}animated`, `${prefix}${animation}`);
  
    if (speed) {
      element.classList.add(`${prefix}${speed}`);
    }
  
    if (hash['delay']) {
      element.classList.add(`${prefix}delay-${hash['delay']}s`);
    }
  
    if (hash['repeat']) {
      if (hash['repeat'] === 'infinite') {
        element.classList.add(`${prefix}${hash['repeat']}`);
      } else {
        element.classList.add(`${prefix}repeat-${hash['repeat']}`);
      }
    }
  });
