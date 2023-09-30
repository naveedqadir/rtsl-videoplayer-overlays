import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const VideoComponent = ({ rtspURL }) => {
  return (
    <div className="container mx-2 h-[350px]">
      <ReactPlayer
        url={rtspURL}
        playing={false}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

VideoComponent.propTypes = {
  rtspURL: PropTypes.string.isRequired,
};

export default VideoComponent;

