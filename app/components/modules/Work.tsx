import Image from 'next/image';

import Button from '@element/Button';
import { IWork } from 'types';

import ArrowSmallImg from '../../../public/arrow-small.svg';
import styles from './Work.module.scss';

interface Props extends IWork {}

const Work = ({
  title,
  websiteLink,
  role,
  client,
  description,
  image,
  imageAlt,
  technologies,
}: Props) => {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.content}>
        <div className={styles.details}>
          <div>
            <h6>Role</h6>
            <p>{role}</p>
          </div>
          <div>
            <h6>Technologies</h6>
            {technologies.map((tech, i) => (
              <span key={i}>
                {tech}
                {i < technologies.length - 1 && ', '}
              </span>
            ))}
          </div>
          <div>
            <h6>Client</h6>
            <p>{client}</p>
          </div>
        </div>

        <div className={styles.description}>
          <p>{description}</p>
          <Button link={websiteLink}>
            <div>View Project</div>
            <div className={styles.icon}>
              <Image src={ArrowSmallImg} alt='arrow' />
            </div>
          </Button>
        </div>
      </div>

      <div className={styles.image}>
        <Image src={image} alt={imageAlt} width='100' height='100' layout='responsive' />
      </div>
    </section>
  );
};

export default Work;
