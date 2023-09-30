import PropTypes from 'prop-types';

export default function ResponsiveOverlay({ hidden, shownOverlay }) {
  return (
    <div>
      {hidden === true && (
        <div className="inset-0 flex items-center justify-center">
          <div
            className="p-4 shadow-lg rounded-md"
            style={{
              left: `calc(${shownOverlay.positionX} - 2rem)`,
              top: `calc(${shownOverlay.positionY} - 2rem)`,
              fontSize: `${shownOverlay.size}`, 
              backgroundImage: 'linear-gradient(45deg, #f06, #09f, #6f0, #f06)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'rainbow 3s linear infinite',
            }}
          >
            {shownOverlay.content}
          </div>
        </div>
      )}
    </div>
  );
}
ResponsiveOverlay.propTypes = {
    hidden: PropTypes.bool.isRequired,
    shownOverlay: PropTypes.shape({
      positionX: PropTypes.number.isRequired,
      positionY: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  };
