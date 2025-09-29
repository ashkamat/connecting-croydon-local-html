import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';


// const pin1 = {
//     id: 'marker-1',
//     image: 'images/pin-red.png',
//     tooltip: 'TBX',
//     size: { width: 64, height: 32 },
//     anchor: 'bottom center',
//     gps: [0, 0, 0],
// };

// const pin2 = {
//     id: 'marker-1',
//     image: 'images/pin-red.png',
//     tooltip: 'reception',
//     size: { width: 64, height: 32 },
//     anchor: 'bottom center',
//     gps: [-20,180, 0],
// };





const nodes = [
    {
        id: '1',
        panorama: "images/R0010042.JPG",
        thumbnail: "images/R0010042.JPG",
        name: 'One',
        caption: "go back outside",
        links: [{ nodeId: '2' }],
        // markers: [pin1],
        gps: [0, 0, 0],
        sphereCorrection: { pan: '180deg' },
    },
    {
        id: '2',
        panorama: "images/R0010041.JPG",
        thumbnail: "images/R0010041.JPG",
        name: 'Two',
        caption: "go to receception reception",
        links: [ { nodeId: '1' }, { nodeId: '3' }],
        // markers: [pin2],
        gps: [0, 1, 0],
        sphereCorrection: { pan: '0deg' },
    },


        {
        id: '3',
        panorama: "images/R0010040.JPG",
        thumbnail: "images/R0010041.JPG",
        name: 'Two',
        caption: "louge endtrance",
        links: [{ nodeId: '2' }, { nodeId: '4' }],

        gps: [0,2, 0],
        sphereCorrection: { pan: '10deg' },
    },


     {
        id: '4',
        panorama: "images/R0010039.JPG",
        thumbnail: "images/R0010041.JPG",
        name: 'Two',
        caption: "louge endtrance",
        links: [{ nodeId: '3' },{ nodeId: '5' }],

        gps: [0,3, 0],
        sphereCorrection: { pan: '160' },
    },


     {
        id: '5',
        panorama: "images/R0010036.JPG",
        thumbnail: "images/R0010041.JPG",
        name: 'Two',
        caption: "louge endtrance",
        links: [{ nodeId: '4' }],

        gps: [0,4, 0],
        sphereCorrection: { pan: '160' },
    },
    
    
    
    
];

new Viewer({
    container: 'viewer',
    loadingImg: "images/loader.gif",
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    defaultYaw: '0deg',
    navbar: 'zoom move gallery caption fullscreen',

    plugins: [
        MarkersPlugin,
    
        VirtualTourPlugin.withConfig({
            positionMode: 'gps',
            renderMode: '3d',
            nodes: nodes,
            startNodeId: '1',
        }),
    ],
});





const container1 = document.querySelector("#viewer2")


const myViewer1 = new Viewer({

 container: container1,
 panorama: "images/R0010042.JPG",
 caption: "caption", 
 description: "this is a description",
 loadingImg: "images/tbxhlogo.avif",
sphereCorrection:{ pan:"180deg", tilt:0, roll: 0 },

navbar: [
        'zoom',
        'move',
        "fullscreen"
    ],

    plugins: [
        CompassPlugin.withConfig({
            hotspots: [
                { yaw: '45deg' }, 
                { yaw: '60deg', color: 'red' },
            ],
        }),
    ],




})





    myViewer1.addEventListener('click', ({ data }) => {
    console.log(`${data.rightclick ? 'right ' : ''}clicked at yaw: ${data.yaw} pitch: ${data.pitch}`);
});