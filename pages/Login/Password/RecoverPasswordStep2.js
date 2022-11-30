import * as React from 'react';
import { View, Image, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Modal, NativeBaseProvider, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default function RecoverPasswordStep2  ({ navigation }) {
    const [show, setShow] = React.useState(false);

    // Show Password Value Uncensored    
    const handleClick = () => setShow(!show);

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
                    Nova senha
                  </Text>
                </FormControl.Label>
                
                <Input type={show ? "text" : "password"} color="white" size="md" placeholder="Digite sua Nova Senha" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="key-outline" size="lg" ml="2" mr="-1" color="primary" />}
                InputRightElement={<Icon as={Ionicons} name={show ? "eye-outline" : "eye-off-outline"} size="lg" mr="2" color="primary" onPress={handleClick} />}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                    Confirmar nova senha
                  </Text>
                </FormControl.Label>
                
                <Input type={show ? "text" : "password"} color="white" size="md" placeholder="Digite sua Nova Senha" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="key-outline" size="lg" ml="2" mr="-1" color="primary" />}
                InputRightElement={<Icon as={Ionicons} name={show ? "eye-outline" : "eye-off-outline"} size="lg" mr="2" color="primary" onPress={handleClick} />}
                />
              </FormControl>
              <Button mt="4" bg="primary" shadow="5"
                _hover={{
                  bg: 'primary'
                }}
                _pressed={{
                  bg: 'active'
                }}
                onPress={() => navigation.navigate('Login')}
              >
                <Text fontFamily="Quicksand" fontWeight="600" color="black">
                  Confirmar Recuperação
                </Text>
              </Button>
            </VStack>
          </Box>
      </Center>
    );
}