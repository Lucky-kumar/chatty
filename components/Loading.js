/* eslint-disable @next/next/no-img-element */
import { Circle } from "better-react-spinkit";


function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
              
                <img
                   src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/344/external-chat-seo-4.-1-sbts2018-outline-color-sbts2018-3.png"
                    alt="logo"
                    style={{marginBottom: 10}}
                    height={200}
                />
                <Circle color="#3CBC" size={60} />
            </div>
        </center>

    );
}

export default Loading;