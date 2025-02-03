import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-learn-more',
  styleUrl: 'app-learn-more.css',
  shadow: true,
})
export class AppLearnMore {
  @Prop() name: string;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    debugger;
    if (this.name) {
      return (
        <div class="app-learn-more">
          <p>Learn more here {this.normalize(this.name)}</p>
        </div>
      );
    }
  }
}
