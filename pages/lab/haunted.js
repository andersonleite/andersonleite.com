import dynamic from 'next/dynamic'
import styles from '../../styles/Lab.module.scss'
import Haunted from '../../components/haunted-house/haunted'

const SceneWithoutSSR = dynamic(
  () => import('../../components/Scene'),
  { ssr: false }
)

export default function HauntedPage() {
  return (
    <div className={styles.title}>
      <SceneWithoutSSR y={2} z={10}>
        <Haunted />
      </SceneWithoutSSR>
    </div>
  )
}
