import React from 'react'
import Header from '../../components/header'
import VideoCard from '../../components/videoCard'
import HealthyHacksHeaderImage from '../../img/healthyHacksHeader.jpg'

export default function HealthyHacksPage() {
  return (
    <>
      <Header
        title={`Healthy Hacks`}
        description={`Want to look better, feel great, and radiate health? Try these simple hacks to maximize your health with minimum effort.`}
        image={HealthyHacksHeaderImage}
      />

        <VideoCard
          videoIframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/Cw1eJmubJcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
          title={`Mentally Healthy Workplaces`}
          description={`Managing your mental health while working remotely`}
        />

        <VideoCard
          videoIframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/dyPvQAxZGyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
          title={`Health & Safety tips while working from home`}
          description={`Avoid unnecessary pain with these ergonomic tips!`}
        />

        <VideoCard
          videoIframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/EhMdChazw6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
          title={`30 Healthy Habit Hacks`}
          description={`Managing your mental health while working remotely`}
        />
    </>
  )
}

