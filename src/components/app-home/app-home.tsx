import { Component, h } from '@stencil/core';
import { Router } from '../../';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Native fast deployment for image creation and development debugging.
        </p>
        <div class="features">
          <div class="f-card c1 c1-2-md c1-3-lg">
            <h3>Cross-platform</h3>
            <p>Windows; Linux; *BSDs (FreeBSD; OpenBSD; NetBSD); UNIX (macOS; HP/UX; z/OS; SunOS)</p>
          </div>
          <div class="f-card c1 c1-2-md c1-3-lg">
            <h3>Not <em>only</em> Docker</h3>
            <p>Native deployments or deployments inside images (e.g., Docker, OCI, jails, Solaris Zones).</p>
          </div>
          <div class="f-card c1 c1-md c1-3-lg">
            <h3>Public domain</h3>
            <p>Greater than cross-platform and greater than open-source.</p>
          </div>
        </div>
        <div class="center">
          <button onClick={() => Router.push('/learn-more/learn-more')} class="center-elem">
            Live in-browser demo
          </button>
          <button onClick={() => Router.push('/learn-more/learn-more')} class="center-elem">
            Learn more
          </button>
        </div>
      </div>
    );
  }
}
