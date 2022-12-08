import React from "react";
import axios from "axios";
import { Box, Pressable, Text, Flex, ScrollView, Link } from "native-base";
import { View, TouchableOpacity, Button } from "react-native";
import api from "../../src/services/api";
import { useStoreState } from "easy-peasy";

export default function CardMB({ navigation }) {
  const tema = useStoreState((state) => state.tema);
  const [milkBank, setMilkBank] = React.useState([]);

  React.useEffect(() => {
    api.get("/milk-bank").then((response) => {
      setMilkBank(response.data);
    });
  }, []);

  const handlePost = async () => {
    await api.post("/milk-bank", {
        name_bank: "teste1",
        address:"Av. Prof. Moraes Rego, 1235 - Cidade Universitária - Recife/PE",
      })
      .then({ data });
  };

  return (
    <ScrollView backgroundColor={tema}>
      <Box alignItems="center" my="5">
        {milkBank.map((item, index) => (
          <Pressable
            onPress={() => console.log("I'm Pressed")}
            rounded="8"
            overflow="hidden"
            borderWidth="1"
            borderColor="coolGray.300"
            maxW="96"
            shadow="3"
            bg={(index % 2 == 0) ? "coolGray.100" : "coolGray.200"}
            p="5"
            my="2.5"
            w="full"
            key={item?.milk_bank_id}
          >
            <Box>
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                {item?.name_bank}
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                {item?.address}
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                  Mais Informações
                </Text>
              </Flex>
            </Box>
          </Pressable>
        ))}
      </Box>
      <Button
        fontSize={12}
        fontWeight="medium"
        color="#FF5F24"
        title="Adicionar Novo"
        onPress={() => handlePost()}
      />
    </ScrollView>
  );
}
