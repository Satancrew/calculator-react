import { useState } from 'react';
import GlobalStyle1 from './styles/theme1';
import GlobalStyle2 from './styles/theme2';
import GlobalStyle3 from './styles/theme3';
import {
  Container,
  Header,
  WrapperSwitch,
  Switch,
  SwitchContainer,
  Switcher,
  Input,
  ButtonContainer,
  Button,
} from './App.style';

function App() {
  return (
    <>
      {<GlobalStyle1 />}
      <Container>
        <Header>
          Calculator React
          <WrapperSwitch>
            theme
            <Switch>
              <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <SwitchContainer>
                <Switcher />
              </SwitchContainer>
            </Switch>
          </WrapperSwitch>
        </Header>
        <Input></Input>
        <ButtonContainer>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>DEL</Button>

          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>+</Button>

          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>-</Button>

          <Button>.</Button>
          <Button>0</Button>
          <Button>/</Button>
          <Button>x</Button>

          <Button
            gc="1/3"
            color="var(--white)"
            bg="var(--key-background-blue)"
            bdbox="var(--key-shadow-dark-blue)">
            RESET
          </Button>
          <Button
            gc="3/5"
            color="var(--white)"
            bg="var(--key-background-red)"
            bdbox="var(--key-shadow-dark-blue)">
            =
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default App;
