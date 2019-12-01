import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true
})
export class ProgressBar {

  @Prop() phase: String;

  render() {
    return (
      <Host>
        <div class={`progress-bar progress-bar-${this.phase}`}>
          <div class={`progress-item progress-bar-content progress-bar-content-${this.phase}`}><slot name="initial-value"/></div>
          <div class={`progress-item final-value-${this.phase}`}><slot name="final-value"/></div>
        </div>
      </Host>
    );
  }

}
