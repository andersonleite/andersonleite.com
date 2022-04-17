import styles from '../../styles/Monopo.module.scss'
import {Background} from '../../components/monopo/Background'
import {Lense} from '../../components/monopo/Lense'
import {TextPlane} from '../../components/monopo/TextPlane'
import dynamic from 'next/dynamic'

import {
	enFragmentShader, enVertexShader, jpFragmentShader, jpVertexShader
} from '../../components/monopo/shader';

const SceneWithoutSSR = dynamic(
  () => import('../../components/Scene'),
  { ssr: false }
)

export default function LabPage() {
  return (
    <div className={styles.full}>
      <SceneWithoutSSR z={3}>
        <Background />
        <Lense />
        <TextPlane
					text={['What shall', 'I create today?']}
					vertexShader={enVertexShader}
					fragmentShader={enFragmentShader}
				/>
        <TextPlane text={['今日は', '何を作ろうか?']} vertexShader={jpVertexShader} fragmentShader={jpFragmentShader} />
      </SceneWithoutSSR>
    </div>
  )
}
