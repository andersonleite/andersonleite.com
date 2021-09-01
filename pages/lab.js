import dynamic from 'next/dynamic'
import styles from '../styles/Lab.module.scss'

const SceneWithoutSSR = dynamic(
  () => import('../components/Scene'),
  { ssr: false }
)

export default function LabPage() {
  return (
    <div className={styles.title}>
      <SceneWithoutSSR />
    </div>
  )
}
