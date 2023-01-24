import { Button, Center, useToast } from "native-base";

export const Warning = (message: string) => {
  const toast = useToast();
  return (
    <Center>
      <Button
        onPress={() =>
          toast.show({
            description: `${message}`,
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  );
};
