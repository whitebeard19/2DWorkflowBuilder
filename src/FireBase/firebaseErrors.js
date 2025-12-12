export const firebaseErrorMessages = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Please enter a valid email.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/user-not-found": "No account found with this email.",
    "auth/invalid-credential": "Incorrect password or Email. Please try again.",
    "auth/popup-closed-by-user": "Popup closed before completing sign-in.",
    "auth/network-request-failed": "Network error. Check your internet connection.",
}

export const getErrorMessage = (code) => {
    return firebaseErrorMessages[code] || "Something went wrong. Please try again.";
}