'use client';
import styled from 'styled-components';

export const Wrapper = styled.main`
  background: #001C43;
  background: linear-gradient(180deg, rgba(0, 28, 67, 1) 65%, rgba(0, 190, 221, 1) 100%);
  height: 100vh;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const ContainerLeft = styled.div`
  width: 55%;
`;

export const ContainerRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 45%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 35%;
`;

export const Tag = styled.h3`
  display: block;
  background-color: #00BEDD;
  border-bottom-right-radius: 1.5rem 1.5rem;
  border-top-left-radius: 1.5rem 1.5rem;
  padding: 0.8rem 0.8rem 0.8rem 1.2rem;
  margin-bottom: 1rem;
  span{
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: .15rem;
    text-transform: uppercase;
  }
`

export const Title = styled.h1`
  color:#FFF;
  display: flex;
  flex-direction: column;
  font-size: 11.4rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Subtitle = styled.h2`
  color: #00bedd;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: .1rem;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
`;
