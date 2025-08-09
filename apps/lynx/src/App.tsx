import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./App.css";

import arrow from "./assets/arrow.png";
import lynxLogo from "./assets/lynx-logo.png";
import reactLynxLogo from "./assets/react-logo.png";
import JSBI from "jsbi";

const BIT_0 = JSBI.BigInt(0);
const BIT_63 = JSBI.BigInt("0x8000000000000000");
const BIT_30 = JSBI.BigInt(Math.pow(2, 30));
const N_63 = JSBI.toNumber(BIT_63);
const S_63 = BIT_63.toString(10);

export function App(props: { onMounted?: () => void }) {
  const [alterLogo, setAlterLogo] = useState(false);

  const a = JSBI.notEqual(JSBI.bitwiseAnd(BIT_30, BIT_63), BIT_0);
  const b = a.toString();

  useEffect(() => {
    console.info("Hello, ReactLynx");
    props.onMounted?.();
  }, []);

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo((prevAlterLogo) => !prevAlterLogo);
  }, []);

  return (

    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={reactLynxLogo} className="Logo--react" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <text className="Title">React</text>
          <text className="Subtitle">on Lynx</text>
          <text className="Subtitle">by Gauthier</text>
          <text className="Description">{b} - {BIT_30} - {BIT_63}</text>
          <text className="Description">{N_63}</text>
          <text className="Description">{S_63}</text>
        </view>
        <view className="Content">
          <image src={arrow} className="Arrow" />
          <text className="Description">Tap the logo and have fun!</text>
          <text className="Hint">
            Edit
            <text
              style={{
                fontStyle: "italic",
                color: "rgba(255, 255, 255, 0.85)",
              }}
            >
              {" src/App.tsx "}
            </text>
            to see updates!
          </text>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  );
}
