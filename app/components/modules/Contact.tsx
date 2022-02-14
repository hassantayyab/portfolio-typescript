import Image from 'next/image'

import Button from '@element/Button'
import Heading from '@element/Heading'

import ContactImg from '../../../public/contact.svg'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div>
        <div className={styles.image}>
          <Image src={ContactImg} alt="Contact us" className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <Heading
          title="Contact"
          subTitle="Let’s get in touch and create something amazing together"
          align="left"
        />

        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Budget" />
          <input placeholder="Timeline" />
          <textarea placeholder="Message" rows={3}></textarea>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
