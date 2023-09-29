import { useEffect, useState } from "react";
import EnterUrl from "../components/EnterUrl";
import VideoComponent from "../components/VideoComponent";
import OverlayShow from "../components/OverlayShow";
import axios from "axios"

export default function Video() {

  const[rtspURL , setrtspURL] = useState('https://www.youtube.com/watch?v=ycFuqS2__I8&ab_channel=Wowza');
  const [overlays, setOverlays] = useState([]);

  useEffect(() => {
    async function fetchOverlays() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/overlaySettings"
        );
        setOverlays(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchOverlays();
  }, []);

  return (
    <div>
            <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          {overlays.length > 0 ? (
        <OverlayShow overlays={overlays} />
          ) : (
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Go to <u><a href="/overlaysettings">Overlay Settings</a></u> to add a Text overlay
            </h1>
          )}
        </div>
        <div className="text-center mt-2">
          <VideoComponent rtspURL={ rtspURL } />
        </div>
          <EnterUrl setrtspURL={setrtspURL}/>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  )
}
