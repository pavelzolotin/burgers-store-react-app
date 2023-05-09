import { useEffect } from 'react';

import styled from 'styled-components';

import MoonIcon from '../../assets/img/moon-icon.svg';
import SunIcon from '../../assets/img/sun-warm-icon.svg';

const ToggleBox = styled.div`
  @media (min-width: 1280px) {
    margin-right: 5rem;
  }

  @media (min-width: 1450px) {
    margin-right: 10rem;
  }

  @media (max-width: 767px) {
    padding-left: 2.5rem;
  }
`;

const Toggle = styled.span`
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  left: .2rem;
  top: 0;
  background-color: #fff;
  border-radius: 50%;
  transition: transform .2s linear;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 0.2rem solid #343739;
  background-color: #212426;
  width: 5.5rem;
  height: 2.6rem;
  border-radius: 5rem;
  padding: .7rem;
  cursor: pointer;

  & ${Toggle} {
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    left: .2rem;
    top: 0;
    background-color: #fff;
    border-radius: 50%;
    transition: transform .2s linear;
  }
`;

const Input = styled.input`
  position: absolute;
  right: 0;
  visibility: hidden;

  &:checked + ${Label} ${Toggle} {
    transform: translateX(2.8rem);
  }
`;

const Icon = styled.img`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
`;

type ToggleThemeProps = {
    theme: string;
    setTheme: any;
};

const ToggleTheme = ({theme, setTheme}: ToggleThemeProps) => {
    const toggleIsClicked = theme === 'light' ? true : '';

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ToggleBox>
            <Input
                type="checkbox"
                id="theme-toggle"
                onChange={() => toggleTheme()}
                checked={toggleIsClicked}
            />
            <Label htmlFor="theme-toggle">
                <Icon
                    src={MoonIcon}
                    alt=""
                />
                <Icon
                    src={SunIcon}
                    alt=""
                />
                <Toggle />
            </Label>
        </ToggleBox>
    );
};

export default ToggleTheme;