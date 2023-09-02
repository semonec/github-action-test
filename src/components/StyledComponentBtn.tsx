import { styled } from "styled-components";

// The Button from the last section without the interpolations
const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const StyledComponentBtn = () => {
    return (
        <div>
            <Button>Normal Button </Button>
            <TomatoButton > Tomato Button </TomatoButton>
        </div>
    )
}

export default StyledComponentBtn