import { Container } from "./ContainerWrap.styles";

interface ContainerWrap {
  children: React.ReactNode;
}

function ContainerWrap({ children }: ContainerWrap) {
  return <Container>{children}</Container>;
}

export default ContainerWrap;
