import Image from 'next/image'

import Heading from '@element/Heading'
import ProcessCard from '@element/ProcessCard'

import CodeImg from '../../../public/code.svg'
import DeployImg from '../../../public/deploy.svg'
import FigmaImg from '../../../public/figma.svg'
import StepArrowImg from '../../../public/step-arrow.svg'
import styles from './Process.module.scss'

interface ProcessStep {
  image: string
  imageAlt: string
  title: string
  description: string
}

const Process = () => {
  const processes: ProcessStep[] = [
    {
      image: FigmaImg,
      imageAlt: 'Figma Logo',
      title: 'Design',
      description:
        'From wireframing to ui designing, we love using Figma for creating amazing designs.',
    },
    {
      image: CodeImg,
      imageAlt: 'Code Logo',
      title: 'Develop',
      description:
        'Now it is time to bring our ideas to life using the latest tech stack.',
    },
    {
      image: DeployImg,
      imageAlt: 'Deploy Logo',
      title: 'Deploy',
      description:
        'After all the hard work, it is finally time to deploy your website to a scalable solution.',
    },
  ]

  return (
    <section>
      <Heading title="Our Process" subTitle="We call it the 3D" />
      <div className={styles.content}>
        {processes.map(({ title, image, imageAlt, description }, i) => {
          return i === 1 ? (
            <ProcessCard
              key={title}
              title={title}
              image={image}
              imageAlt={imageAlt}>
              {description}
            </ProcessCard>
          ) : (
            <div key={title}>
              <ProcessCard title={title} image={image} imageAlt={imageAlt}>
                {description}
              </ProcessCard>
              <div className={styles.arrowImage}>
                <Image src={StepArrowImg} alt="next step" layout="responsive" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Process
