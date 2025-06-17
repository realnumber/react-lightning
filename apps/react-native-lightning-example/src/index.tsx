import { SdfTrFontFace } from '@lightningjs/renderer';
import { Canvas, type RenderOptions } from '@plextv/react-lightning';
import { Column, Row } from '@plextv/react-lightning-components';
import '@plextv/react-lightning-plugin-flexbox-lite/jsx';
import type { LinkingOptions } from '@react-navigation/native';
import {
  DarkTheme,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import { ErrorBoundary } from './ErrorBoundary';
import { keyMap } from './keyMap';
import { LayoutTest } from './pages/LayoutTest';
import React from 'react';

const Stack = createStackNavigator();

const screens = {
  Layout: 'layout',
  Animation: 'animation',
  Library: 'library',
  Components: 'components',
  NestedLayouts: 'nestedLayouts',
  VirtualizedList: 'virtualizedList',
  FlashList: 'flashList',
};

const linking: LinkingOptions<object> = {
  prefixes: [],
  config: {
    screens,
  },
};

const MainApp = () => {
  const nav = useNavigation<{
    navigate(screen: keyof typeof screens): void;
  }>();

  return (
    <Row focusable>

      <Column
        focusable
        style={{ width: 1670, height: 1080, color: 0x000000ff, clipping: true }}
      >
        <LayoutTest />
      </Column>
    </Row>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Canvas keyMap={keyMap}>
        <NavigationContainer linking={linking} theme={DarkTheme}>
          <MainApp />
        </NavigationContainer>
      </Canvas>
    </ErrorBoundary>
  );
};

AppRegistry.registerComponent('plex', () => App);
AppRegistry.runApplication('plex', {
  rootId: 'app',
  renderOptions: {
    driver: 'normal',
    fonts: (stage) => [
      new SdfTrFontFace('msdf', {
        fontFamily: 'sans-serif',
        descriptors: {
          weight: 'bold',
        },
        atlasUrl: '/fonts/Ubuntu-Bold.msdf.png',
        atlasDataUrl: '/fonts/Ubuntu-Bold.msdf.json',
        stage,
      }),
      new SdfTrFontFace('msdf', {
        fontFamily: 'sans-serif',
        descriptors: {},
        atlasUrl: '/fonts/Ubuntu-Regular.msdf.png',
        atlasDataUrl: '/fonts/Ubuntu-Regular.msdf.json',
        stage,
      }),
    ],
  } as RenderOptions,
});
