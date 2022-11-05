import React from "react";
import { useState } from "react";
import { Center, Box, Select } from "native-base";

const SelectList = () => {
  const [service, setService] = React.useState("");
  return(
    <Center>
      <Box width="370">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Busque por bairro" placeholder="Busque por bairro" 
        onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Afogados" value="Afogados" />
          <Select.Item label="Boa Vista" value="BoaVista" />
          <Select.Item label="Casa Amarela" value="CasaAmarela" />
          <Select.Item label="Centro" value="Centro" />
          <Select.Item label="Cidade Universitária" value="CidadeUniversitária" />
          <Select.Item label="Curado" value="Curado" />
          <Select.Item label="Encruzilhada" value="Encruzilhada" />
          <Select.Item label="Ibura" value="Ibura" />
          <Select.Item label="Ilha do Leite" value="IlhaDoLeite" />         
          <Select.Item label="Iputinga" value="Iputinga" />      
          <Select.Item label="Paisandu" value="Paisandu" />      
        </Select>
      </Box>
    </Center>
  );
}

export default SelectList;