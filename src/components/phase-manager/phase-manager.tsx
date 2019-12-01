import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-phase-manager',
  styleUrl: 'phase-manager.css',
  shadow: true
})
export class PhaseManager {

  @Prop() type: string;
  @Prop() phase: string;
  @Prop() initalValue: string = '';
  @Prop() finalPhase: string = '';

  render() {
    const types = {
      'state1': (
        <div class="phases">
          <w-progress-bar phase={this.phase}>
            <p slot='initial-value'>{this.initalValue}</p>
            <p slot='final-value'>{this.finalPhase}</p>
          </w-progress-bar>
          <w-add-icon type="phase-one"></w-add-icon>
          <w-add-icon type="phase-two"></w-add-icon>
        </div>
      ),
        'state2': (
          <div class="phases">
            <div class="phase-completed phase-one"><p>01</p></div>
            <w-progress-bar phase={this.phase}>
              <p slot='initial-value'>{this.initalValue}</p>
              <p slot='final-value'>{this.finalPhase}</p>
            </w-progress-bar>
            <w-add-icon type="phase-two"></w-add-icon>
          </div>
      ),
      'state3': (
        <div class="phases">
          <div class="phase-completed phase-one"><p>01</p></div>
          <div class="phase-completed phase-two"><p>02</p></div>
          <w-progress-bar phase={this.phase}>
            <p slot='initial-value'>{this.initalValue}</p>
            <p slot='final-value'>{this.finalPhase}</p>
          </w-progress-bar>
        </div>
      ),
    };
    return (
      <Host>
        {types[this.type]}
      </Host>
    );
  }
}

