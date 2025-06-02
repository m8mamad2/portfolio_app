'use client'


import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, useDisclosure } from "@nextui-org/modal";

export default function NavBar() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-lg sm:text-xl">👋  Hi , Welcome to my Portfolio Blog</p>
      </NavbarBrand>
        
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Button onClick={onOpen} className="px-9" color="primary" variant="ghost">
            Contact Me
          </Button>
          {/* <LandingButton style="!w-28"/> */}
        </NavbarItem>
      </NavbarContent>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">My Information</ModalHeader>
              <ModalBody>
                <h1 className="text-gray-400 text-xs">Email: <p className="text-white        text-base">m8mamad2@gmail.com</p></h1>
                <h1 className="text-gray-400 text-xs">Telegram: <p className="text-white     text-base">@flut_ter</p></h1>
                <h1 className="text-gray-400 text-xs">Phone Number: <p className="text-white text-base">09371617431</p></h1>
                <a className="text-primary" href='/resume.pdf' download>Download CV</a>
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
