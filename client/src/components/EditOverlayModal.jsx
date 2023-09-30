/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

const EditOverlayModal = ({ isOpen, onClose, overlay, fetchOverlaySettings }) => {
  const [editedOverlay, setEditedOverlay] = useState(overlay);

  useEffect(() => {
    setEditedOverlay(overlay);
  }, [overlay]);

  const updateOverlaySetting = async () => {
    try {
      // Create a new object with the fields to update, excluding _id
    //   Due to _id being imutable in mongo db
      const updatedData = {
        positionX: editedOverlay.positionX,
        positionY: editedOverlay.positionY,
        size: editedOverlay.size,
        content: editedOverlay.content,
      };
  
      await axios.put(
        `https://videobackend-mu.vercel.app/api/overlaySettings/${overlay._id}`,
        updatedData
      );
      fetchOverlaySettings();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon */}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title className="text-lg leading-6 font-medium text-gray-900">
                      Edit Overlay
                    </Dialog.Title>
                    {/* Form to edit an existing overlay setting */}
                    <form className="mb-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="mb-2 sm:col-span-1">
                          <label
                            htmlFor="positionX"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Position X
                          </label>
                          <input
                            type="text"
                            id="positionX"
                            name="positionX"
                            placeholder="Position Left in %"
                            value={editedOverlay.positionX}
                            onChange={(e) =>
                              setEditedOverlay({
                                ...editedOverlay,
                                positionX: e.target.value,
                              })
                            }
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="mb-2 sm:col-span-1">
                          <label
                            htmlFor="positionY"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Position Y
                          </label>
                          <input
                            type="text"
                            id="positionY"
                            name="positionY"
                            placeholder="Position Top in %"
                            value={editedOverlay.positionY}
                            onChange={(e) =>
                              setEditedOverlay({
                                ...editedOverlay,
                                positionY: e.target.value,
                              })
                            }
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="mb-2 sm:col-span-1">
                          <label
                            htmlFor="size"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Size
                          </label>
                          <input
                            type="text"
                            id="size"
                            name="size"
                            placeholder="fontSize in rem"
                            value={editedOverlay.size}
                            onChange={(e) =>
                              setEditedOverlay({
                                ...editedOverlay,
                                size: e.target.value,
                              })
                            }
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="content"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Content
                        </label>
                        <input
                          type="text"
                          id="content"
                          name="content"
                          placeholder="Content"
                          value={editedOverlay.content}
                          onChange={(e) =>
                            setEditedOverlay({
                              ...editedOverlay,
                              content: e.target.value,
                            })
                          }
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={updateOverlaySetting}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditOverlayModal;
