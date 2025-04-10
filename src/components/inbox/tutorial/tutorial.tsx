import { TutorialImg1, TutorialImg2, TutorialImg3 } from '#/assets/tutorial'
import { EmblaOptionsType } from 'embla-carousel'
import { Carousel } from './carousel'
import { Slide } from './slide'

const Tutorial = () => {
  const OPTIONS: EmblaOptionsType = {}
  const slideData = [
    {
      title: '그림 암호 만들기',
      image: TutorialImg1,
      description: '내가 그린 그림으로 친구에게 퀴즈를 보내보아요!',
    },
    {
      title: '마음 전하기',
      image: TutorialImg2,
      description: '친구에게 마음을 담은 편지를 작성해보아요!',
    },
    {
      title: '편지 공개',
      image: TutorialImg3,
      description: '친구가 내 그림 퀴즈를 맞추면 편지 내용을 확인할 수 있어요!',
    },
  ]

  const SLIDES = slideData.map(({ title, image, description }, idx) => (
    <Slide order={idx + 1} title={title} image={image} description={description} key={title} />
  ))

  return <Carousel slides={SLIDES} options={OPTIONS} />
}

export default Tutorial
