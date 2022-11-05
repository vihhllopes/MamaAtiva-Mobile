import {Box, Pressable, Text, Flex, ScrollView, Link} from "native-base";
import {View, TouchableOpacity} from 'react-native';

export default function CardMB({navigation}) {
  return (
      <ScrollView>
        <Box alignItems="center" marginTop="4" marginBottom="1">
          <Pressable rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Banco de Leite e Centro de Incentivo ao aleitamento IMIP
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
              R. dos Coelhos, 300 - Boa Vista - Recife/PE
              </Text>
              <Flex>
                <TouchableOpacity onPress={('Show')}>
                  <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                    Mais Informações
                  </Text>
                </TouchableOpacity>
              </Flex>
            </Box>
          </Pressable>
        </Box>

        <Box alignItems="center" marginTop="2" marginBottom="1">
          <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="#EEEFF8" p="5">
            <Box>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Banco de Leite Humano Maternidade Bandeira Filho
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                R. Londrina, s/n - Afogados - Recife/PE
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                  Mais Informações
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>

        <Box alignItems="center" marginTop="2" marginBottom="1" >
          <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Banco de Leite Humano Hospital das Clínicas
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Av. Prof. Moraes Rego, 1235 - Cidade Universitária - Recife/PE
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                  Mais Informações
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>

        <Box alignItems="center" marginTop="2" marginBottom="1" >
          <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="#EEEFF8" p="5">
            <Box>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Banco de Leite Humano Enfa. Tereza Cristina do Hospital Barão de Lucena
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Av. Prof. Moraes Rego, 1235 - Cidade Universitária - Recife/PE
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                  Mais Informações
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>

        <Box alignItems="center" marginTop="2" marginBottom="1" >
          <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Banco de Leite Humano Dra. Sônia do Hospital Agamenon Magalhães
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Estrada do Arraial, 2723 - Casa Amarela - Recife/PE
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="#FF5F24">
                  Mais Informações
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>
      </ScrollView>
  );
}
