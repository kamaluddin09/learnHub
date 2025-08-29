import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function GoogleAuth() {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      if (!credentialResponse.credential) {
        toast.error("Google authentication failed: No credential received");
        return;
      }

      // Send token to backend
      const response = await axios.post("http://localhost:5000/api/auth/google-login", {
        token: credentialResponse.credential,
        credentials: credentialResponse.credential, // 👈 for backend fallback
      });

      const data = response.data;

      if (data.success) {
        toast.success(data.message || "Login successful");

        // Save auth data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to dashboard/home
        navigate("/");
      } else {
        toast.error(data.message || "Authentication failed");
      }
    } catch (err: any) {
      console.error("Google login error:", err);

      if (err.response) {
        toast.error(err.response.data.message || "Authentication failed");
      } else if (err.request) {
        toast.error("Network error: Please check your connection");
      } else {
        toast.error("Google authentication failed");
      }
    }
  };

  const handleGoogleFailure = () => {
    toast.error("Google authentication was cancelled or failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={handleGoogleFailure}
      useOneTap
      text="continue_with"
      shape="rectangular"
    />
  );
}

export default GoogleAuth;
