import { Flex, Title } from "@mantine/core"

export default function SectionHeader(props: { children: string }) {
  return (
    <Flex px={"xl"} mt={"12.5rem"} mb={"5rem"} justify={"center"} align={"center"}>
      <Title order={1} size={"3em"} c={"dark"} ta={"center"}>
        { props.children }
      </Title>
    </Flex>
  );
};