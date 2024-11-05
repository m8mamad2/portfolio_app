"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, useDisclosure } from "@nextui-org/modal";


export function LandingButton() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>

    <div className="w-full">
        <ButtonsCard onClick={onOpen} key={0} >
          <button className="relative inline-flex h-14 w-64 overflow-hidden rounded-xl p-[1px] mt-5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact Me
            </span>
          </button>
        </ButtonsCard>
    </div>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">My Information</ModalHeader>
              <ModalBody>
                <h1>Email: <p>x@gmail.com</p></h1>
                <h1>Telegram: <p>@</p></h1>
                <h1>Phone Number: <p>000000</p></h1>
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
    </>
  );
}


const ButtonsCard = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick} >
      <div className="relative z-40 ">{children}</div>
    </div>
  );
};

