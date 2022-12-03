import * as React from 'react';
import { Image, Box, Text, VStack, FormControl, Input, Link, Button, Center, Modal, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default function Login ({ navigation })  {  
    const [modalVisible, setModalVisible] = React.useState(false);
    const [show, setShow] = React.useState(false);

    // Show Password Value Uncensored    
    const handleClick = () => setShow(!show);

    return (
      <Center bg="tertiary" w="100%" h="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack space={6} mt="5">
              <Image h="108px" w="188px" alignSelf="center" fill="secondary"
                source={require('../../assets/Images/logo_mama_ativa.png')}
              />             
              <FormControl>
                <FormControl.Label>
                  <Text color="primary" fontFamily="Quicksand" fontWeight="600">
                    E-mail
                  </Text>
                </FormControl.Label>
                <Input type="text" color="white" size="md" placeholder="Digite seu E-mail" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty" 
                _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="mail-outline" size="lg" ml="2" mr="-1" color="primary" />}
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
                <Link _text={{
                fontFamily: "Quicksand",
                fontSize: "sm",
                fontWeight: "400",
                color: "primary"
              }} onPress={() => { setModalVisible(!modalVisible)}} alignSelf="flex-end" mt="2">
                  Esqueceu a senha?
                </Link>
              </FormControl>
              <Button mt="4" bg="primary" shadow="5"
                _hover={{
                  bg: 'primary'
                }}
                _pressed={{
                  bg: 'active'
                }}
                onPress={() => navigation.navigate('Home')}
              >
                <Text fontFamily="Quicksand" fontWeight="600" color="black">
                  Entrar
                </Text>
              </Button>
              <VStack mt="4" justifyContent="center" alignItems="center">
                <Text fontSize="sm" color="primary" fontFamily="Quicksand">
                  Ainda não tem uma conta?
                </Text>
                <Link _text={{
                fontFamily: "Quicksand",
                color: "secondary",
                fontWeight: "medium",
                fontSize: "sm"
              }} onPress={() => navigation.navigate('SignUp')}>
                  Cadastre-se!
                </Link>
              </VStack>
            </VStack>
          </Box>

          <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="20%" size="lg">
            <Modal.Content bg="tertiary" borderColor="active" borderWidth="0px">
              <Modal.CloseButton bg="tertiary" borderColor="active" color="primary"/>
              <Modal.Header bg="tertiary" borderColor="active">
                <Text color="primary" fontFamily="Quicksand" fontWeight="600">Recuperação da Senha!</Text>
              </Modal.Header>
              <Modal.Body bg="tertiary" borderColor="active">
                <Text color="primary" fontFamily="RobotoSlab" fontWeight="400">Digite o endereço de e-mail que após confirmar será enviado um código e link para redefinir a senha.</Text>
                <FormControl mt="3">
                  <FormControl.Label>
                    <Text color="primary" fontFamily="Quicksand" fontWeight="600">E-mail</Text>
                  </FormControl.Label>
                  <Input type="email" color="white" size="md" placeholder="Digite seu E-mail" fontFamily="Quicksand" fontWeight="400" borderColor="primary" focusOutlineColor="primary" bg="tranparenty"
                _hover={{ borderColor: "primary", bg: "tranparenty" }}                
                _focus={{ borderColor: "none", bg: "tranparenty" }}
                InputLeftElement={<Icon as={Ionicons} name="mail-outline" size="lg" ml="2" mr="-1" color="primary" />}
                />
                </FormControl>
              </Modal.Body>
              <Modal.Footer bg="tertiary" borderColor="active">
                <Button flex="1" onPress={() => {navigation.navigate('RecoverPasswordStep1'); setModalVisible(false);}} bg="primary" shadow="5"
                  _hover={{
                    bg: 'primary'
                  }}
                  _pressed={{
                    bg: 'active'
                  }}                                    
                >
                  <Text fontFamily="Quicksand" fontWeight="600" color="black">
                    Confirmar
                  </Text>
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>        
    );
}