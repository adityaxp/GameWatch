import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <div style={{ paddingLeft: 45 }}>
      <Heading as="h1">{heading}</Heading>
    </div>
  );
};

export default GameHeading;
