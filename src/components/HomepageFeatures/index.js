import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import "react-chat-elements/dist/main.css";

const FeatureList = [
  {
    title: 'Easy to Use',
    Img: require('@site/static/img/easy-to-use.png').default,
    description: (
      <>
        React Chat Elements is very easy to use.
        Just need add to your projects and import the components that you want to use in your code.
      </>
    ),
  },
  {
    title: '100+ forks on GitHub',
    Img: require('@site/static/img/fork-github.png').default,
    description: (
      <>
        This package using by lots of developers and companies.
        That means has many contributors and developing day by day.
      </>
    ),
  },
  {
    title: 'Developed by Detaysoft',
    Img: require('@site/static/img/detay-logo.png').default,
    description: (
      <>
        Detaysoft is a member of United VARs, which is an SAP Platinum Partner.
        This package was developed and powered by this company that 20 years over service. 
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
