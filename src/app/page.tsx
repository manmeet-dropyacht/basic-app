import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 >Welcome to Dropyacht</h1>
        <Image
              src="/dropyacht.png"
              alt="Dropyacht Logo"
              width={50}
              height={50}
              priority
            />
      </div>

     
    </main>
  )
}
