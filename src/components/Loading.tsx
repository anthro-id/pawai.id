import { Flex, Loader } from "@mantine/core";

export default function Loading() {
  return (
    <Flex justify={"center"} align={"center"} h={256}>
      <Loader size={"md"} />
    </Flex>
  );
};