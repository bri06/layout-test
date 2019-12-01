import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true
})
export class ProgressBar {

  render() {
    return (
      <Host>
        <div class="progress-bar">
          <div class="progress-item progress-bar-content"><slot name="initial-value"/></div>
          <div class="progress-item progress-final-value"><slot name="final-value"/></div>
        </div>
      </Host>
    );
  }

}
