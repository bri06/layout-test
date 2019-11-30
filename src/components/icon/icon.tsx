import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class Icon {

  @Prop() iconName: string;
  @Prop() color: string;

  render() {
    return (
      <Host>
        <i class={`${this.iconName} ${this.color}`} />
      </Host>
    );
  }

}
