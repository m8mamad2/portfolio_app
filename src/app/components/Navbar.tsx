'use client'


import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, useDisclosure } from "@nextui-org/modal";

export default function NavBar() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <Navbar shouldHideOnScroll className='bg-black'>
      <NavbarBrand>
        <p className="font-bold text-lg text-white sm:text-xl">👋  Hi , Welcome to my Portfolio Blog</p>
      </NavbarBrand>
        
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button onClick={onOpen} className="px-9" color="primary" variant="ghost">
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">My Information</ModalHeader>
              <ModalBody className="text-white">
                <h1>Email: <p>x@gmail.com</p></h1>
                <h1>Telegram: <p>@</p></h1>
                <h1>Phone Number: <p>0000000</p></h1>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


    </Navbar>
  );
}
