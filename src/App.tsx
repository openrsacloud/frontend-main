import { Button, Navbar, NavbarBrand, NavbarMenuToggle, Card, CardBody, CardHeader, CardFooter, User, NavbarContent, NavbarItem, Link, Spinner, Popover, Modal, ModalHeader, useDisclosure, ModalContent, ModalBody, ModalFooter, Input } from '@nextui-org/react'
import { ReactElement, useState } from 'react';
import { ArrowForwardIos, Key, Close } from '@mui/icons-material'

function Preloader(): ReactElement {
  return (
    <p>loading</p>
  )
}

function App(): ReactElement {
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);
  const [ LoggingOut, setLoggingOut ] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar
        maxWidth='xl'
        isBordered
        onMenuOpenChange={ setIsMenuOpen }
      >
        <NavbarBrand>
          <NavbarMenuToggle
            aria-label={ isMenuOpen ? "Close menu" : "Open menu" }
            className="sm:hidden mr-3"
          />
          <span className='font-bold text-lg'>openRSACloud</span>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Dashboard
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="max-w-7xl px-6 w-full mx-auto">
        <div className="grid grid-cols-2 h-[calc(100vh-128px)] gap-48">
          <div className="flex flex-col justify-center mx-auto">
            <h1 className=''>
              <span className='text-6xl'>Welcome back,</span><br/>
              <span className='leading-snug text-8xl font-bold'>Roland!</span><br/>
            </h1>
          </div>
          <Card className='h-max m-auto mx-10 max-w-[375px]'>
            <CardHeader className='select-none'>
              <Key></Key>
              <p className='ml-2'>Authentication</p>

              <Button
                isIconOnly
                className='ml-auto'
                radius='full'
                size='sm'
                onClick={() => setLoggingOut(!LoggingOut)}
              >
                {
                  LoggingOut ? (
                    <Spinner color='white' size="sm" />
                  ) : (
                    <Close style={{ fontSize: 18 }}></Close>
                  )
                }
              </Button>
            </CardHeader>
            <CardBody>
              {
                false ? (
                  <div className="flex flex-col items-center">
                    <p className='mb-2 font-bold'>Logged in as</p>
                    <User
                      name={"Roland Vincze"}
                      description={"Administrator"}
                      avatarProps={{
                        src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                      }}
                      className='py-1.5 px-4 border border-white/[.08]'
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-2">
                      <Input
                        type='email'
                        label='E-mail'
                        size='md'
                        placeholder='mail@example.com'
                      ></Input>
                      <Input
                        type='password'
                        label='Password'
                        size='md'
                        placeholder='********'
                      ></Input>
                    </div>
                  </>
                )
              }
            </CardBody>
            <CardFooter>
              <Button
                className='m-auto w-max text-lg'
                color='primary'
                radius='full'
                size='md'
                isDisabled={LoggingOut}
                onClick={onOpen}
                // startContent={<LockOpenOutlined></LockOpenOutlined>}
                endContent={<ArrowForwardIos style={{ fontSize: 16 }}></ArrowForwardIos>}
              >Get in</Button>
            </CardFooter>
          </Card>
        </div>

        <Modal size='md' isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Message</ModalHeader>
                <ModalBody>
                  <p>Your session has expired. You have to log in again.</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}

export { App, Preloader }