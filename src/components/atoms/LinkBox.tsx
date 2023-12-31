import React, { useState, useEffect } from 'react';
import { ReactComponent as LinkImg } from '@assets/LinkImg.svg';
import { ReactComponent as LinkCopy } from '@assets/LinkCopy.svg';
import { ReactComponent as LinkKakao } from '@assets/LinkKakao.svg';
import styled from 'styled-components';
import { analytics } from '@shared/analytics';

interface Props {
  handleImgCopy: Function;
  handleLinkCopy: Function;
  beachEng: string;
}

export default function LinkBox({ handleImgCopy, handleLinkCopy, beachEng }: Props) {
  const handleKakao = () => {
    analytics.track('click_kakao_share');

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '제 바다를 소개할게요. 당신도 나와 같은 바다라면 같이 여행 갈래요?',
        description: '#바다여행 #바다추천 #성향테스트',
        imageUrl: `https://d27aaiwdisjvn.cloudfront.net/${beachEng}`,
        link: {
          mobileWebUrl: `https://gibal.net/result/${beachEng}`,
          webUrl: `https://gibal.net/result/${beachEng}`,
        },
      },
      buttons: [
        {
          title: '테스트 하러가기',
          link: {
            mobileWebUrl: `https://gibal.net/`,
            webUrl: `https://gibal.net/`,
          },
        },
      ],
    });
  };
  return (
    <LinkBoxWrapper>
      <span className='shared-friend'>공유하고 같이갈 친구 찾으러 가자</span>
      <div className='link-item-wrapper'>
        <button
          className='shared-icon-wrapper'
          type='button'
          onClick={() => {
            handleImgCopy();
          }}
        >
          <LinkImg />
        </button>
        <button
          className='shared-Icon-wrapper'
          type='button'
          onClick={() => {
            handleLinkCopy();
          }}
        >
          <LinkCopy />
        </button>
        <button
          className='shared-Icon-wrapper'
          type='button'
          onClick={() => {
            handleKakao();
          }}
        >
          <LinkKakao />
        </button>
      </div>
    </LinkBoxWrapper>
  );
}

const LinkBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .shared-friend {
    color: ${({ theme }) => theme.colors.darkMatter};
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .link-item-wrapper {
    display: flex;
    justify-content: space-between;
    width: 196px;
    margin-top: 20px;
    .sharedIconWrapper {
      cursor: pointer;
    }
  }
`;
