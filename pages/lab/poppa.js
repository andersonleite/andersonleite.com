import dynamic from 'next/dynamic'
import styles from '../../styles/poppa.module.scss'
import Poppa from '../../components/poppa/poppa'

const SceneWithoutSSR = dynamic(
  () => import('../../components/poppa/scene-poppa'),
  { ssr: false }
)

export default function LabPage() {
  return (
    <div className={styles.container}>
      <SceneWithoutSSR z={75}>
        <Poppa />
      </SceneWithoutSSR>
    </div>
  )
}
