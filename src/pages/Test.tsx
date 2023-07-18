import React from 'react';

import DefaultButton from '@components/atoms/DefaultButton';
import LargeButton from '@components/atoms/LargeButton';
import Logo from '@components/atoms/Logo';
import PrevButton from '@components/atoms/PrevButton';

import { useStore } from '@shared/store';

export default function Test() {
  const { selectContent, setSelectContent } = useStore();

  return (
    <div>
      <DefaultButton />
      <br />
      <LargeButton />
      <br />
      <Logo />
      <br />
      <PrevButton />
    </div>
  );
}
