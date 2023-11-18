import React from 'react';
import Image from 'next/image';

import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/Doug3.png"
          alt="An image showing Doug"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Doug</h1>
      <p>
        I blog about web development - especially frontend framework like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
