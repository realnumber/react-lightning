import { type LightningImageElement, focusable } from '@plextv/react-lightning';
import { Column, Row } from '@plextv/react-lightning-components';
import { useMemo, type ForwardedRef } from 'react';
import { getRandomSpotifyImageUrl } from '../images';

export const RandomImage = focusable<{ autoFocus?: boolean }>(({ focused }, ref) => {
  const image = useMemo(() => getRandomSpotifyImageUrl(), []);

  return (
    <lng-image
      ref={ref as ForwardedRef<LightningImageElement>}
      src={`${image}`}
      style={{ 
        width: 200,
        height: 200,
        scale: focused ? 1.25 : 1 
      }}
      transition={{ scale: { duration: 150 } }}
    />
  );
});

export const LayoutTest = () => {
  return (
    <Column
      focusable
      style={{
        justifyContent: 'flex-start',
        width: 1670,
        height: 1080,
        gap: 40,
        padding: 40
      }}
    >
      <Row
        focusable
        style={{
          justifyContent: 'space-between',
          width: 1670,
          height: 200
        }}
      >
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
      </Row>
      <Row
        focusable
        style={{
          justifyContent: 'space-evenly',
          width: 1670,
          height: 200
        }}
      >
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
      </Row>
      <Row
        focusable
        style={{
          justifyContent: 'space-evenly',
          width: 1670,
          height: 200
        }}
      >
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
      </Row>
      <Row
        focusable
        style={{
          justifyContent: 'space-evenly',
          width: 1670,
          height: 200
        }}
      >
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
        <RandomImage />
      </Row>
    </Column>
  );
};
