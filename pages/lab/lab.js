import dynamic from 'next/dynamic'
import styles from '../../styles/Lab.module.scss'
import Cube from '../../components/Cube'

const SceneWithoutSSR = dynamic(
  () => import('../../components/Scene'),
  { ssr: false }
)

export default function LabPage() {
  return (
    <div className={styles.full}>
      <SceneWithoutSSR z={3}>
        <Cube />
      </SceneWithoutSSR>
    </div>
  )
}
