import { useEffect } from "react";
import { useFollowMouse } from "../hooks/useFollowMouse"

export const FollowMouse = () => {

  const { enabled, setEnabled, position } = useFollowMouse()

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled)
  }, [enabled]);

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#FF6B6B',
        border: '1px solid #FFD93D',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      />
      <button
        type="button"
        className="border-2 py-1 px-4 rounded-xl text-white text-lg hover:opacity-50 transition-all"
        onClick={() => setEnabled(!enabled)}
      >{`${enabled ? "Desactivar" : "Activar"}`} seguimiento de puntero</button>
    </>
  )
}
