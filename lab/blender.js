import dynamic from 'next/dynamic'
import styles from '../../styles/Lab.module.scss'
import Blender from '../../components/blender/blender'

const SceneWithoutSSR = dynamic(
  () => import('../../components/Scene'),
  { ssr: false }
)

export default function BlenderPage() {
  return (
    <div className={styles.title}>
      <SceneWithoutSSR x={1} y={3} z={15}>
        <Blender />
      </SceneWithoutSSR>
    </div>
  )
}
