import { module, test } from 'qunit';
import { setupRenderingTest } from 'ams/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | slider/caption', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Slider::Caption />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Slider::Caption>
        template block text
      </Slider::Caption>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
