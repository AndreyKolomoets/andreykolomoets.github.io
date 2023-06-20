import { module, test } from 'qunit';
import { setupRenderingTest } from 'ams/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header/contact', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Header::Contact />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Header::Contact>
        template block text
      </Header::Contact>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
