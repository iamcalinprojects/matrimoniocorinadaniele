import { Routes, Route } from "react-router-dom";
import "./App.css";
import Stich from "./Stich";

function Home() {
  const windowsWidth = window.innerWidth;
  return (
    <>
      {windowsWidth > 768 && (
        <>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "124.2593%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              // marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: 8,
              willChange: "transform",
            }}
          >
            <iframe
              loading='lazy'
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src='https://www.canva.com/design/DAHF6rU62YY/-8ExE7BQQ0AUKUfICkWI4Q/view?embed'
              allowFullScreen='allowfullscreen'
              allow='fullscreen'
            ></iframe>
          </div>
        </>
      )}
      {windowsWidth < 768 && (
        <>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "177.7778%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              // marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: 8,
              willChange: "transform",
            }}
          >
            <iframe
              loading='lazy'
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src='https://www.canva.com/design/DAHF7pt0dgA/0ZCZ05qQDwsmAMq3GiXfyQ/view?embed'
              allowFullScreen='allowfullscreen'
              allow='fullscreen'
            ></iframe>
          </div>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/' element={<Stich />} />
    </Routes>
  );
}

export default App;
