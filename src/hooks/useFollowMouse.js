import { useEffect, useState } from "react";

export const useFollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({
        ...position,
        x: clientX,
        y: clientY
      })

    }
    if (enabled) window.addEventListener("pointermove", handleMove)

    // esto se ejecuta cuando se desmonta el componente
    return () => { window.removeEventListener("pointermove", handleMove) } // limpio el efecto

  }, [enabled]);

  return {
    enabled,
    setEnabled,
    position
  }
}
