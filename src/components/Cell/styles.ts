import styled from "styled-components";

type CellType = "alive" | "dead" | "life";

export const Icon = styled.div<{ type: CellType }>`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  ${({ type }) =>
    type === "alive" &&
    "background: linear-gradient(180deg, #FFB800 0%, #FFF7B0 100%);"};
  ${({ type }) =>
    type === "dead" &&
    "background: linear-gradient(180deg, #0D658A 0%, #B0FFB4 100%);"};
  ${({ type }) =>
    type === "life" &&
    "background: linear-gradient(180deg, #AD00FF 0%, #FFB0E9 100%);"};
  transition: background 0.3s;
  &:before {
    ${({ type }) => type === "alive" && `content: "💥"`};
    ${({ type }) => type === "dead" && `content: "💀"`};
    ${({ type }) => type === "life" && `content: "🐣"`};
    position: absolute;
    font-size: 20px;
    width: 20px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 16px 16px 8px;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-column-gap: 16px;

  @keyframes bounce-h {
    0% {
      opacity: 0;
      transform: translateX(200%);
    }

    20% {
      transform: translateX(0);
    }

    40% {
      transform: translateX(-8px);
    }

    60% {
      opacity: 1;
      transform: translateX(5px);
    }

    80% {
      transform: translateX(-3px);
    }

    100% {
      transform: translateY(0);
    }
  }

  // enter from
  &.transition-enter {
    max-height: 0;
    transition: max-height 0.5s;
  }

  // enter to
  &.transition-enter-active {
    max-height: 250px;
    animation: bounce-h 1.2s forwards;
    opacity: 1;
  }

  // enter to
  &.transition-exit {
    background: #000;
    /* max-height: 250px; */
    /* animation: bounce-h 1.2s forwards; */
    /* opacity: 1; */
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0025em;
`;
