import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement("example-element")
class ExampleElement extends LitElement {
  @property()
  example = "this is example";

  render() {
    return html`
      <input type="text" placeholder=${`例）${this.example}`} />
    `;
  }
}