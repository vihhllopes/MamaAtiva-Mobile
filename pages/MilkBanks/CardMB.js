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
      <Box
        alignItems="center"
        marginTop="4"
        marginBottom="1"
        backgroundColor={tema}
      >
        <Pressable
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.100"
          p="5"
        >
          <Box>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              {milkBank[0]?.name_bank}{" "}
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              {milkBank[0]?.address}{" "}
            </Text>
            <Flex>
              <TouchableOpacity onPress={"Show"}>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                  Mais Informações
                </Text>
              </TouchableOpacity>
            </Flex>
          </Box>
        </Pressable>
      </Box>

      <Box
        alignItems="center"
        marginTop="2"
        marginBottom="1"
        backgroundColor={tema}
      >
        <Pressable
          onPress={() => console.log("I'm Pressed")}
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="#EEEFF8"
          p="5"
        >
          <Box>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              {milkBank[1]?.name_bank}{" "}
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              {milkBank[1]?.address}{" "}
            </Text>
            <Flex>
              <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                Mais Informações
              </Text>
            </Flex>
          </Box>
        </Pressable>
      </Box>

      <Box alignItems="center" marginTop="2" marginBottom="1">
        <Pressable
          onPress={() => console.log("I'm Pressed")}
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.100"
          p="5"
        >
          <Box>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              {milkBank[2]?.name_bank}{" "}
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              {milkBank[2]?.address}{" "}
            </Text>
            <Flex>
              <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                Mais Informações
              </Text>
            </Flex>
          </Box>
        </Pressable>
      </Box>

      <Box alignItems="center" marginTop="2" marginBottom="1">
        <Pressable
          onPress={() => console.log("I'm Pressed")}
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="#EEEFF8"
          p="5"
        >
          <Box>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              {milkBank[3]?.name_bank}{" "}
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              {milkBank[3]?.address}{" "}
            </Text>
            <Flex>
              <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                Mais Informações
              </Text>
            </Flex>
          </Box>
        </Pressable>
      </Box>

      <Box alignItems="center" marginTop="2" marginBottom="1">
        <Pressable
          onPress={() => console.log("I'm Pressed")}
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.100"
          p="5"
        >
          <Box>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              {milkBank[4]?.name_bank}{" "}
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              {milkBank[4]?.address}{" "}
            </Text>
            <Flex>
              <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                Mais Infomações
              </Text>
            </Flex>
          </Box>
        </Pressable>
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
