import Swal from "sweetalert2";

export const successEvent = (message) => {
  Swal.fire({
    title: "Good job!",
    text: message,
    icon: "success",
  });
};

export const failEvent = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};

export const waitEvent = (waiting, message) => {
  if (waiting) {
    Swal.fire({
      title: "Loading...",
      text: message,
      icon: "info",
      showConfirmButton: false,
    });
  }
};
