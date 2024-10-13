import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class project1 extends DDDSuper(LitElement) {

  static get tag() {
    return "project-1";
  }

  constructor() {
    super();
    this.title = "title";
    this.goal = "0";
    this.image = "Image";
    this.description = "Description";
    this.label = "Label";
    this.size = "Size";
    this.color = "Color";
  }

  static get properties() {
    return {
      title: { type: String },
      goal: { type: Number },
      image: { type: String },
      description: { type: String },
      label: { type: String },
      size: { type: Number },
      color: { type: Boolean },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--project-1-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  render() {
    return html`
    <div class="wrapper">
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(project1.tag, project1);