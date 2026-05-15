import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "green"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry, 
  cubeMaterial
)

scene.add(cubeMesh)


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
  0.5,
  200)

camera.position.z = 5



const canvas = document.querySelector('canvas.threejs')

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})


const controls = new OrbitControls( camera, canvas)

const renderLoop = () => {
    window.requestAnimationFrame(renderLoop);
    
}

console.log(renderLoop)


controls.update()

scene.add(camera)

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)