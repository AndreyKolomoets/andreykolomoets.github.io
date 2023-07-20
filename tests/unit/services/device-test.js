import { module, test } from 'qunit';
import { setupTest } from 'ams/tests/helpers';

module('Unit | Service | device', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);
  });
});
