import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-poc-component',
  styleUrl: 'poc-component.css',
  shadow: true
})
export class PocComponent {

  @Prop() logo: string;
  @Prop() title: string;
  @Prop() date: string;
  @Prop() time: string;
  @Prop() initalValue: string;
  @Prop() finalValue: string;
  @Prop() description: string;
  @Prop() type: string;
  @Prop() phase: string;

  render() {
    return (
      <nav class="container">
        <w-card-info
          logo={this.logo}
          title={this.title}
          description={this.description}>
        </w-card-info>
        <w-card-info
          title={this.date}
          description={this.time}>
        </w-card-info>
        <w-phase-manager initalValue={this.initalValue} finalPhase={this.finalValue} phase={this.phase} type={this.type}></w-phase-manager>
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
