import * as React from 'react';
import { View, Image, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Modal, NativeBaseProvider, Icon, Avatar } from "native-base";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function SignUp ({ navigation }) {  
    const [modalVisible, setModalVisible] = React.useState(false);
    const [show, setShow] = React.useState(false);

    // Show Password Value Uncensored    
    const handleClick = () => setShow(!show);

    return (
      <Center bg="tertiary" w="100%" h="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack space={6} mt="5">
              <Avatar bg="primary" alignSelf="center" size="xl" source={{ uri: "" }}>
                <Icon as={MaterialCommunityIcons} name="camera-plus" size="4xl" color="tertiary" /> 
                <Text color="tertiary" fontFamily="Quicksand" fontWeight="600" textAlign="center">
                  ADICIONAR
                  FOTO
                </Text>
              </Avatar>

              <FormControl>
                <FormControl.Label>
                  <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                    Nome
                  </Text>
                </FormControl.Label>
                <Input type="text" color="white" size="md" placeholder="Digite seu Nome" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="person-outline" size="lg" ml="2" mr="-1" color="primary" />}
                />
              </FormControl>

              <FormControl>
                <FormControl.Label>
                  <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                    E-mail
                  </Text>
                </FormControl.Label>
                <Input type="text" color="white" size="md" placeholder="Digite seu E-mail" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="mail-outline" size="lg" ml="2" mr="-1" color="primary" />}
                />
              </FormControl>

                <FormControl>
                  <FormControl.Label>
                    <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                      Data de nascimento
                    </Text>
                  </FormControl.Label>
                  <Input type="text" color="white" size="md" m="0" placeholder="__/__/__" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                  _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                  _focus={{ borderColor: "none", bg: "tranparenty" }}
                  InputLeftElement={<Icon as={Ionicons} name="calendar-outline" size="lg" ml="2" mr="-1" color="primary" />}
                  />
                </FormControl>

                <FormControl>
                  <FormControl.Label>
                    <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                      Telefone
                    </Text>
                  </FormControl.Label>
                  <Input type="text" color="white" size="md" placeholder="(__) _____-____" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                  _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                  _focus={{ borderColor: "none", bg: "tranparenty" }}
                  InputLeftElement={<Icon as={Ionicons} name="call-outline" size="lg" ml="2" mr="-1" color="primary" />}
                  />
                </FormControl>

              <FormControl>
                <FormControl.Label>
                  <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                    Senha
                  </Text>
                </FormControl.Label>
                
                <Input type={show ? "text" : "password"} color="white" size="md" placeholder="Digite sua Senha" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="key-outline" size="lg" ml="2" mr="-1" color="primary" />}
                InputRightElement={<Icon as={Ionicons} name={show ? "eye-outline" : "eye-off-outline"} size="lg" mr="2" color="primary" onPress={handleClick} />}
                />
              </FormControl>

              <FormControl>
                <FormControl.Label>
                  <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                    Confirmar senha
                  </Text>
                </FormControl.Label>
                
                <Input type={show ? "text" : "password"} color="white" size="md" placeholder="Digite sua Senha" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="key-outline" size="lg" ml="2" mr="-1" color="primary" />}
                InputRightElement={<Icon as={Ionicons} name={show ? "eye-outline" : "eye-off-outline"} size="lg" mr="2" color="primary" onPress={handleClick} />}
                />
              </FormControl>

              <Button mt="4" bg="primary" shadow="5" onPress={() => navigation.navigate('Login')}
                _hover={{
                  bg: 'primary'
                }}
                _pressed={{
                  bg: 'active'
                }}                
              >
                <Text fontFamily="Quicksand" fontWeight="600" color="black">
                  Cadastrar
                </Text>
              </Button>
            </VStack>
          </Box>
        </Center>        
    );
}