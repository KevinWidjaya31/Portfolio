import {Toaster} from "react-hot-toast"

export function ToastProvider () {
    return (
       <>
        <Toaster
            position="top-right"
            toastOptions={{
            duration: 3000,
            style: {
                borderRadius: "12px",
                background: "#111827",
                color: "#fff",
                fontSize: "14px",
            },
            }}
            />
       </>
    )
}