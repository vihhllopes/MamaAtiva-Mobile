import * as React from 'react';
import { View, Image, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Modal, NativeBaseProvider, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default function RecoverPasswordStep1 ({ navigation })  {
    return (
      <Center bg="tertiary" w="100%" h="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack space={6} mt="5"> 
              <Heading color="primary" fontFamily="Quicksand" fontWeight="600">
                Recuperação da Senha
              </Heading>
              <Center>                             
                <Icon as={Ionicons} name="lock-open-outline" size="7xl" color="primary" /> 
              </Center>            
              <FormControl>
                <FormControl.Label>
                  <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                    Insira o código de recuperação
                  </Text>
                </FormControl.Label>
                <Input type="text" color="white" size="md" placeholder="_ _ _ _ _" fontFamily="Quicksand" fontSize="2xl" fontWeight="600" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" textAlign="center" 
                _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="keypad-outline" size="xl" ml="2" mr="-8" color="primary" />}
                />
              </FormControl>
              <Button mt="4" bg="primary" shadow="5"
                _hover={{
                  bg: 'primary'
                }}
                _pressed={{
                  bg: 'active'
                }}
                onPress={() => navigation.navigate('RecoverPasswordStep2')}
              >
                <Text fontFamily="Quicksand" fontWeight="600" color="black">
                  Continuar
                </Text>
              </Button>
            </VStack>
          </Box>
      </Center>
    );
}