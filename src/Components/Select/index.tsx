import {
  Center,
  CheckIcon,
  FormControl,
  Select,
  WarningOutlineIcon,
} from "native-base";

export const SelectComponent = () => {
  return (
    <Center>
      <FormControl w="110" maxW="300" isRequired>
        <Select
          minWidth="100"
          accessibilityLabel="Choose Service"
          placeholder="Dinheiro"
          _selectedItem={{
            bg: "#FF69B4",
            endIcon: <CheckIcon size={5} />,
          }}
          bg={"#FF69B4"}
        >
          <Select.Item label="Dinheiro" value="money" />
          <Select.Item label="pix" value="pix" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Por favor escolha entre os metodos de pagamento!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};
