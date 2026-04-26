export default function Toast({ toast }) {
  return (
    <div
      className={`fixed bottom-5 right-5 z-[100] border rounded-md px-4 py-3 shadow-lg transition-all duration-300 ${
        toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      } ${
        toast.type === "success"
          ? "bg-[#2f9e72] border-[#50C878] text-white"
          : "bg-[#b33d3d] border-[#d96464] text-white"
      }`}
      role="status"
      aria-live="polite"
    >
      <p
        className="text-xs sm:text-sm font-medium"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {toast.message}
      </p>
    </div>
  );
}
