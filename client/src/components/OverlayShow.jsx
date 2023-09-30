import { useState } from "react";
import ResponsiveOverlay from "./ResponsiveOverlay";
import PropTypes from 'prop-types';

const OverlayShow = ({ overlays }) => {
  const [hidden, setHidden] = useState(false);
  const [shownOverlay, setShownOverlay] = useState([]);

  return (
    <div>
      {hidden === false && (
        <>
          {overlays.map((overlay) => (
            <div
              key={overlay._id}
              className="border border-gray-300 rounded-md p-4 mb-4 cursor-pointer"
              onClick={() => {
                setHidden(true);
                setShownOverlay(overlay);
              }}
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
            </div>
          ))}
        </>
      )}
    <ResponsiveOverlay hidden={hidden} shownOverlay={shownOverlay}/>

    </div>
  );
};
OverlayShow.propTypes = {
  overlays: PropTypes.array.isRequired,
};

export default OverlayShow;
