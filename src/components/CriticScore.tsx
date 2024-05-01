import { Badge } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
}

const CriticScore = ({ score }: ScoreProps) => {
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius={4}
      colorScheme={score > 75 ? "green" : score > 50 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
