import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const ToggleActivationModal = ({
  isOpen,
  onClose,
  selectedUser,
  handleToggleActivation,
  isLoading,
}) => {
  if (!selectedUser) return null;

  const isActivating = !selectedUser.isActive;
  const actionText = isActivating ? "activate" : "deactivate";
  const buttonText = isActivating ? "Activate" : "Deactivate";
  const buttonColor = isActivating
    ? "bg-green-500 hover:bg-green-600"
    : "bg-orange-500 hover:bg-orange-600";
  const headerText = isActivating ? "User Activation" : "User Deactivation";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onCloseModal) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {headerText}
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to {actionText} user{" "}
                <b>{selectedUser.userName}</b> ({selectedUser.email})?
              </p>
              {!isActivating && (
                <p className="text-orange-600 mt-2">
                  Note: Deactivated users will not be able to log into the
                  system.
                </p>
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onCloseModal}>
                Cancel
              </Button>
              <Button
                className={`text-white ${buttonColor}`}
                onPress={handleToggleActivation}
                isLoading={isLoading}
              >
                {buttonText}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ToggleActivationModal;
