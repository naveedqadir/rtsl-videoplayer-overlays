import { useState, useEffect } from "react";
import axios from "axios";
import EditOverlayModal from "./EditOverlayModal";

const OverlayOptions = () => {
  const [overlaySettings, setOverlaySettings] = useState([]);
  const [newOverlay, setNewOverlay] = useState({
    positionX: "",
    positionY: "",
    size: "",
    content: "",
  });
  const [editOverlay, setEditOverlay] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchOverlaySettings();
  }, []);

  const fetchOverlaySettings = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/overlaySettings"
      );
      setOverlaySettings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createOverlaySetting = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/api/overlaySettings", newOverlay);
      fetchOverlaySettings();
      setNewOverlay({ positionX: "", positionY: "", size: "", content: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteOverlaySetting = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/overlaySettings/${id}`);
      fetchOverlaySettings();
    } catch (error) {
      console.error(error);
    }
  };

  const openEditModal = (overlay) => {
    setEditOverlay(overlay);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditOverlay(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Overlay Settings</h1>

      {/* Form to create a new overlay setting */}
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
              value={newOverlay.positionX}
              onChange={(e) =>
                setNewOverlay({ ...newOverlay, positionX: e.target.value })
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
              value={newOverlay.positionY}
              onChange={(e) =>
                setNewOverlay({ ...newOverlay, positionY: e.target.value })
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
              value={newOverlay.size}
              onChange={(e) =>
                setNewOverlay({ ...newOverlay, size: e.target.value })
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
            value={newOverlay.content}
            onChange={(e) =>
              setNewOverlay({ ...newOverlay, content: e.target.value })
            }
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="button"
          onClick={createOverlaySetting}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create
        </button>
      </form>

      <div>
        {overlaySettings.map((overlay) => (
          <div
            key={overlay._id}
            className="border border-gray-300 rounded-md p-4 mb-4"
          >
            <div>
              <strong>Position X:</strong> {overlay.positionX}
            </div>
            <div>
              <strong>Position Y:</strong> {overlay.positionY}
            </div>
            <div>
              <strong>Size:</strong> {overlay.size}
            </div>
            <div>
              <strong>Content:</strong> {overlay.content}
            </div>
            <div>
              <button
                type="button"
                onClick={() => openEditModal(overlay)}
                className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mr-2"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => deleteOverlaySetting(overlay._id)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {editOverlay && (
        <EditOverlayModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          overlay={editOverlay}
          fetchOverlaySettings={fetchOverlaySettings}
        />
      )}
    </div>
  );
};

export default OverlayOptions;
