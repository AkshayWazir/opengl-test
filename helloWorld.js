import React from 'react';
import {
  Canvas,
  Rect,
  FractalNoise,
  Skia,
  Shader,
  Fill,
  vec,
} from '@shopify/react-native-skia';

export default function HelloWorld() {
  const size = 256;
  const r = size * 0.33;

  return (
    <Canvas style={{flex: 1}}>
      <Fill color="white" />
      <Rect x={0} y={0} width={500} height={500}>
        <FractalNoise freqX={0.05} freqY={0.1} octaves={4} />
      </Rect>
    </Canvas>
  );
}
