import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './HomepageHero.module.css';

const Logo = require('../../../static/img/logo.svg').default

export default function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Logo className={styles.logo} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--active button--primary button--lg"
            to="/import">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}
