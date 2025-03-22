import { FaDrawPolygon } from "react-icons/fa";
import { SiBlueprint } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";



export const services = [
    {
      name: "Stay Connected",
      icon: <AiOutlineFileProtect/>, 
      description: `Our automation systems ensure uninterrupted connectivity, no matter your location. Stay in the loop, never missing a moment. Our tool kit includes:
        High Definition Pan Tilt Zoom Cameras (PTZ)
        Fibre-to-the-Home Internet Connection
        Motion-sensitive Sensitive Lighting`,
    },
    {
      name: "Be Heard",
      icon: <SiBlueprint/>,
      description: `Amidst the noise, we make sure your voice is heard loud and clear. Every point matters. Our offerings encompass:

        Conference Interpretation System
        Room Audio Technology
        Audio Recording Systems
        Conferencing Voting Software`,
    },
    {
      name: "Be Seen",
      icon: <FaDrawPolygon/>,
      description: `Our AV conferencing solutions enhance visuals for crystal-clear meetings, whether virtual or in-person

        Video Walls
        Video Conferencing
        Repeater Screens
        Projectors
        Desk Pop-Up Monitors
        Video Recording Systems
        Digital Microphone Control System`,
    },
    {
      name: "Take Control",
      icon: <GrUserManager/>,
      description: `Security is paramount. Our advanced security equipment empowers you to oversee your environment effectively:

        State-of-the-Art Security Surveillance Systems
        Biometric & Remote Access Control Systems
        Smart Security System and Control Panel`,
    }
];
