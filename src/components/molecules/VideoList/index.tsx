// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const videoList = [
  {
    title: 'Swap Aggregator',
    link: 'https://www.youtube.com/embed/Rk8XJpzdy_E'
  }
]

const VideoList: React.FC = () => {
  return (
    <Styled.Container>
      {videoList.map(item => (
        <iframe
          key={item.title}
          width="100%"
          height="550px"
          src="https://www.youtube.com/embed/Rk8XJpzdy_E"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </Styled.Container>
  )
}

export default VideoList
