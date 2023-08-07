import styled from 'styled-components';

export const StyledBurger = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    width: 2rem;
    height: .25rem;
    background: ${({open}) => open ? '#ffffff' : '#ffffff'};
    border-radius: .5rem;
    transition: all .3s linear;
    transform-origin: 1px;

    &:first-child {
      background: ${({open}) => open ? '#ffffff' : '#ffffff'};
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({open, setOpen}) => {
    return (
        <StyledBurger
            open={open}
            onClick={() => setOpen(!open)}
        >
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;