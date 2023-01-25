import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useCursor,
  PresentationControls,
} from "@react-three/drei";
import { AsciiEffect } from "three-stdlib";
import { Model } from "../3D/Model";

function Hero() {
  return (
    <>
      <div className="w-screen h-screen z-5">
        <Canvas>
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, -10]} />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 60, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Model
              rotation={[-Math.PI / 1, 0.35, 3.172]}
              position={[15, 0, -0.8]}
              scale={0.3}
            />
          </PresentationControls>
        </Canvas>
      </div>
    </>
  );
}

export default Hero;

function AsciiModel(props) {
  const ref = useRef();
  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame(
    (state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y += delta / 2)
  );
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1.25}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function AsciiRenderer({
  renderIndex = 1,
  characters = " .:-+*=%@#",
  ...options
}) {
  // Reactive state
  const { size, gl, scene, camera } = useThree();

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, options);
    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0px";
    effect.domElement.style.left = "0px";
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "#282c34";
    effect.domElement.style.pointerEvents = "none";
    return effect;
  }, [characters, options.invert]);

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.parentNode.appendChild(effect.domElement);
    return () => gl.domElement.parentNode.removeChild(effect.domElement);
  }, [effect]);

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera);
  }, renderIndex);

  // This component returns nothing, it has no view, it is a purely logical
}
