import dynamic from 'next/dynamic'
import styles from '../../styles/Lab.module.scss'
import Tetrahedron from '../../components/tetrahedron/tetrahedron'

const SceneWithoutSSR = dynamic(
  () => import('../../components/tetrahedron/SceneT'),
  { ssr: false }
)

export default function LabPage() {
  return (
    <div className={styles.tetrahedron}>
      <SceneWithoutSSR z={400}>
        <Tetrahedron />
      </SceneWithoutSSR>
    </div>
  )
}
