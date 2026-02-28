import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/transparent_1px.svg').default,
    description: (
      <>
        Step-by-step developer documentation with code examples.
      </>
    ),
  },
  {
    title: 'Engineering tested',
    Svg: require('@site/static/img/rabbit.svg').default,
    description: (
      <>
        Engineers and knowledge strategists have tested the content to ensure accuracy and reliability.
      </>
    ),
  },
  {
    title: 'Updated regularly',
    Svg: require('@site/static/img/transparent_1px.svg').default,
    description: (
      <>
        As best practices and industry tools evolve, the docs are updated to reflect the latest trends and technologies in the field.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
