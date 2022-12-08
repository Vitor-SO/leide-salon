import React from 'react'
import {TextArea} from 'native-base'

const TextAreaComponent = () => {
  return <TextArea shadow={2} h={100} placeholder="Descreva o tipo de serviço especifico"
   w="auto" _light={{
    placeholderTextColor: "trueGray.800",
    bg: "coolGray.100",
    _hover: {
      bg: "coolGray.200"
    },
    _focus: {
      bg: "coolGray.200:alpha.70"
    }
  }} _dark={{
    bg: "coolGray.800",
    _hover: {
      bg: "coolGray.900"
    },
    _focus: {
      bg: "coolGray.900:alpha.70"
    }
  }} autoCompleteType={undefined} />;
};

export default TextAreaComponent