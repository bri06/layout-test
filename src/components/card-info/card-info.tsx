import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-card-info',
  styleUrl: 'card-info.css',
  shadow: true
})
export class CardInfo {

  @Prop() logo: string
  @Prop() titleCard: string
  @Prop() description: string

  render() {
    return (
      <Host>
        <div class="info">
          { this.logo && (
            <figure class="img-container">
              <img src={this.logo} alt="Avatar" />
            </figure>
          )}
          <div class="description-container">
            <h3 class="title">{this.titleCard}</h3>
            <p class="description">{this.description}</p>
          </div>
        </div>
      </Host>
    );
  }

}
