import "./App.css";
import styled, {
  css,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

const theme = {
  colors: {
    primary: "#2e3142",
  },
};

const Text = styled.h1`
  background: #ccc;
  color: red;
`;

const TextDark = styled(Text)`
  background: green;
  color: yellow;
`;

const Button = styled.button`
  padding: 12px;
  border: 0;
  background-color: red;

  &:hover {
    background: beige;
  }

  ${Text} {
    background: transparent;
  }

  ${(props) =>
    props.corner === "rounded" &&
    css`
      border-radius: 12px;
      ${Text} {
        background: orange;
      }
    `}
  ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${(props) => props.theme.colors.primary};
      ${Text} {
        background: black;
      }
    `}
`;

const Input = ({ name, value, className }) => (
  <input name={name} value={value} className={className} />
);

const StyledInput = styled(Input)`
  background: red;
`;

const GlobalStyle = createGlobalStyle`
body{
  background: black;
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <h1>ssSA</h1>
        <Text>Teste</Text>

        <TextDark>sdfsdfsf</TextDark>

        <Button variant="primary">
          <Text>Button styled</Text>
        </Button>
        <Button corner="rounded">
          <Text>Button styled</Text>
        </Button>

        <StyledInput name="input" value="valor" />
      </div>
    </ThemeProvider>
  );
}

export default App;
