import dynamic from 'next/dynamic'
import styles from '../../styles/Lab.module.scss'
import Sphere from '../../components/sphere/Sphere'

const SceneWithoutSSR = dynamic(
  () => import('../../components/Scene'),
  { ssr: false }
)

export default function LabPage() {
  return (
    <div className={styles.title}>
      <SceneWithoutSSR z={6}>
        <Sphere />
      </SceneWithoutSSR>
    </div>
  )
}
