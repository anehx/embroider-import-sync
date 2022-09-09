import { getOwnConfig, importSync } from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';

export default class FooComponent extends Component {
  get barComponent() {
    return ensureSafeComponent(
      importSync(getOwnConfig().barComponent).default,
      this
    );
  }
}
