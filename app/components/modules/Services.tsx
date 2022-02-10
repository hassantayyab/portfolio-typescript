import Heading from '@element/Heading'
import ServiceCard from '@element/ServiceCard'

import WebDesignImg from '../../../public/web-design.svg'
import WebDevelopImg from '../../../public/web-develop.svg'
import styles from './Services.module.scss'

interface Service {
  image: string
  imageAlt: string
  title: string
  description: string
}

const Services = () => {
  const services: Service[] = [
    {
      image: WebDesignImg,
      imageAlt: 'Web Designing Logo',
      title: 'Web Designing',
      description:
        'Through our beautiful and thoughful web designs we will make using the website a pleasurful experience for our users.',
    },
    {
      image: WebDevelopImg,
      imageAlt: 'Web Developing Logo',
      title: 'Web Development',
      description:
        'We love to create fast and responsive websites with no compromise to the art of code quality.',
    },
  ]

  return (
    <section>
      <Heading
        title="Services"
        subTitle="We provide a complete solution for your website"
      />
      <div className={styles.content}>
        {services.map(({ title, image, imageAlt, description }, i) => (
          <ServiceCard key={i} title={title} image={image} imageAlt={imageAlt}>
            {description}
          </ServiceCard>
        ))}
      </div>
    </section>
  )
}

export default Services
