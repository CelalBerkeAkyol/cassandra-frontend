import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const HardDeleteUserModal = ({
  isOpen,
  onClose,
  selectedUser,
  handleHardDeleteUser,
  isLoading,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onCloseModal) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-red-600">
              Permanently Delete User
            </ModalHeader>
            <ModalBody>
              {selectedUser && (
                <div className="space-y-2">
                  <p className="font-semibold text-danger">
                    WARNING: This action cannot be undone!
                  </p>
                  <p>
                    Are you sure you want to permanently delete user{" "}
                    <b>{selectedUser.userName}</b> ({selectedUser.email}) from
                    the database?
                  </p>
                  <p className="text-red-500">
                    As a result of this action, all user data will be deleted
                    and cannot be recovered.
                  </p>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onCloseModal}>
                Cancel
              </Button>
              <Button
                className="bg-red-600 text-white hover:bg-red-700"
                onPress={handleHardDeleteUser}
                isLoading={isLoading}
              >
                Permanently Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default HardDeleteUserModal;
