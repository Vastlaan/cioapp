import React from 'react'
import styled from 'styled-components'
// import {respond} from '../../styles'

export default function VideoCardComponent({videoIframe, title, description}) {
  return(
      <VideoCard>
        <VideoCardInner>
          <VideoCardTop>
            {videoIframe}
          </VideoCardTop>
          <VideoCardBottom>
            <VideoCardInfo>
              <VideoCardInfoTitle>{title}</VideoCardInfoTitle>
              <VideoCardInfoDescription>{description}</VideoCardInfoDescription>
            </VideoCardInfo>
          </VideoCardBottom>
        </VideoCardInner>
      </VideoCard>
  )
}

const VideoCard = styled.div`
  width: 33%;
  margin: 20px;
  border: 2px solid #000;
`

const VideoCardInner = styled.div`
  background: #fff;
`
const VideoCardTop = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const VideoCardBottom = styled.div`
  padding: 15px;
`
const VideoCardInfo = styled.div`
  padding: 15px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`
const VideoCardInfoTitle = styled.h3`
  margin: auto;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
`
const VideoCardInfoDescription = styled.p`
  font-size: 16px;
  margin: auto;
`

