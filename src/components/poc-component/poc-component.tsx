import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-poc-component',
  styleUrl: 'poc-component.css',
  shadow: true
})
export class PocComponent {

  @Prop() logo: string;
  @Prop() name: string;
  @Prop() date: string;
  @Prop() time: string;
  @Prop() initalValue: Number;
  @Prop() finalValue: Number;
  @Prop() description: string;

  render() {
    return (
      <nav class="container">
        <w-card-info
          logo={this.logo}
          name={this.name}
          description={this.description}
        ></w-card-info>
        <w-card-info
          name={this.date}
          description={this.time}
        ></w-card-info>
        <div class="phases">
          <w-progress-bar>
            <p slot='intial-value'>{this.initalValue}</p>
            <p slot='final-value'>{this.finalValue}</p>
          </w-progress-bar>
          <w-add-icon type="phase-one"></w-add-icon>
        </div>
        <div class="action-bar">
          <div class="icon"><w-icon iconName="icon-duplicate"></w-icon></div>
          <div class="icon"><w-icon iconName="icon-edit"></w-icon></div>
          <div class="icon"><w-icon iconName="icon-archive"></w-icon></div>
          <div class="icon"><w-icon iconName="icon-view"></w-icon></div>
        </div>
      </nav>
    );
  }

}
