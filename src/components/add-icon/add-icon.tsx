import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-add-icon',
  styleUrl: 'add-icon.css',
  shadow: true
})
export class AddIcon {

  @Prop() type: String;

  render() {
    return (
      <Host>
        <div class="icon-container"><w-icon iconName={`icon-add ${this.type}`}></w-icon></div>
      </Host>
    );
  }

}
