import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function ForgetpasswordComponent() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: email, 2: verification code
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState({
    message: "",
    type: "", // success, error
  });
  const [remainingAttempts, setRemainingAttempts] = useState(5);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value.trim());
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await api.post("/auth/forgot-password", { email });

      if (response.data.success) {
        setStatus({
          message:
            "Verification code has been sent to your email address. Please check your inbox.",
          type: "success",
        });
        setStep(2);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error?.details?.[0] ||
        "An error occurred. Please try again.";

      if (error.response?.status === 429) {
        // Rate limit error
        setStatus({
          message: errorMessage,
          type: "error",
        });
      } else if (error.response?.status === 403) {
        // Account deactivated
        setStatus({
          message: errorMessage,
          type: "error",
        });
      } else {
        setStatus({
          message: errorMessage,
          type: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await api.post("/auth/verify-reset-code", {
        email,
        code: verificationCode,
      });

      if (response.data.success) {
        setToken(response.data.data.token);
        setStatus({
          message:
            "Verification successful. You are being redirected to the password reset page.",
          type: "success",
        });

        // Redirect to reset password page after 2 seconds
        setTimeout(() => {
          navigate(
            `/reset?email=${encodeURIComponent(
              email
            )}&token=${encodeURIComponent(response.data.data.token)}`
          );
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error?.details?.[0] ||
        "An error occurred. Please try again.";

      if (error.response?.data?.error?.code === "INVALID_CODE") {
        // Track remaining attempts if available
        const newRemainingAttempts = remainingAttempts - 1;
        setRemainingAttempts(newRemainingAttempts);

        setStatus({
          message: `${errorMessage} (${newRemainingAttempts} attempts remaining)`,
          type: "error",
        });
      } else if (
        error.response?.data?.error?.code === "MAX_ATTEMPTS_EXCEEDED"
      ) {
        setStatus({
          message: errorMessage,
          type: "error",
        });
        // Reset to email step
        setStep(1);
        setRemainingAttempts(5);
      } else if (
        error.response?.data?.error?.code === "INVALID_OR_EXPIRED_TOKEN"
      ) {
        setStatus({
          message: errorMessage,
          type: "error",
        });
        // Reset to email step
        setStep(1);
        setRemainingAttempts(5);
      } else {
        setStatus({
          message: errorMessage,
          type: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await api.post("/auth/forgot-password", { email });

      if (response.data.success) {
        setStatus({
          message: "New verification code has been sent to your email address.",
          type: "success",
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error?.details?.[0] ||
        "An error occurred. Please try again.";

      setStatus({
        message: errorMessage,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full justify-center my-14">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-gray-50 px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-xl font-medium">
          {step === 1 ? "Forgot Password" : "Verification Code"}
        </p>

        {status.message && (
          <div
            className={`p-3 rounded-md text-sm ${
              status.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {status.message}
          </div>
        )}

        {step === 1 ? (
          <form className="flex flex-col gap-3" onSubmit={handleEmailSubmit}>
            <Input
              label="Email"
              name="email"
              placeholder="Enter your email address"
              type="email"
              variant="bordered"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <p className="text-sm text-gray-500 mt-1">
              Enter your email address and we will send you a verification code
              to reset your password.
            </p>

            <Button
              className="bg-primary text-white hover:bg-secondary mt-2"
              type="submit"
              isDisabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Verification Code"}
            </Button>

            <div className="text-center mt-2">
              <Button
                className="text-primary"
                type="button"
                variant="light"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </Button>
            </div>
          </form>
        ) : (
          <form
            className="flex flex-col gap-3"
            onSubmit={handleVerificationSubmit}
          >
            <Input
              label="Email"
              name="email"
              type="email"
              variant="bordered"
              value={email}
              onChange={handleEmailChange}
              isDisabled={true}
              required
            />

            <Input
              label="Verification Code"
              name="verificationCode"
              placeholder="Enter the verification code from your email"
              type="text"
              variant="bordered"
              value={verificationCode}
              onChange={handleCodeChange}
              required
            />

            <p className="text-sm text-gray-500 mt-1">
              Enter the verification code sent to your email address. The code
              is valid for a limited time.
            </p>

            <Button
              className="bg-primary text-white hover:bg-secondary mt-2"
              type="submit"
              isDisabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify and Continue"}
            </Button>

            <div className="flex justify-between mt-2">
              <Button
                className="text-primary"
                type="button"
                variant="light"
                onClick={() => {
                  setStep(1);
                  setVerificationCode("");
                  setStatus({ message: "", type: "" });
                }}
              >
                Back
              </Button>

              <Button
                className="text-primary"
                type="button"
                variant="light"
                onClick={handleResendCode}
                isDisabled={isLoading}
              >
                Resend Code
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
