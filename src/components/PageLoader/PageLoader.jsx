import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export const PageLoader = () => (
  <LoaderWrap>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
      ariaLabel="rotating-lines-loading"
    />
  </LoaderWrap>
);

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
`;
