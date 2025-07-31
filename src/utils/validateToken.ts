import type { allowedProviders } from "../store/zustandContext";

export interface TokenValidationResult {
  isValid: boolean;
  error?: string;
  service: "huggingface" | "replicate";
}

export const validateReplicateToken = (
  token: string
): TokenValidationResult => {
  const result: TokenValidationResult = {
    isValid: false,
    service: "replicate",
  };

  // Check if token is empty or null
  if (!token || token.trim() === "") {
    result.error = "Replicate token cannot be empty";
    return result;
  }

  // Check if token starts with 'r8_'
  if (!token.startsWith("r8_")) {
    result.error = 'Replicate token must start with "r8_"';
    return result;
  }

  // Validate Replicate token format
  if (!token.startsWith("r8_") /* || token.length < 10 */) {
    result.error =
      "Replicate token must begin with 'r8_' and be a valid API token";
    return result;
  }
  // Check if the part after 'r8_' contains only alphanumeric characters
  const tokenBody = token.slice(3); // Remove 'r8_' prefix
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  if (!alphanumericRegex.test(tokenBody)) {
    result.error =
      'Replicate token can only contain alphanumeric characters after "r8_"';
    return result;
  }

  result.isValid = true;
  return result;
};

export const validateHuggingFaceToken = (
  token: string
): TokenValidationResult => {
  const result: TokenValidationResult = {
    isValid: false,
    service: "huggingface",
  };

  // Check if token is empty or null
  if (!token || token.trim() === "") {
    result.error = "Hugging Face token cannot be empty";
    return result;
  }

  // Check if token starts with 'hf_'
  if (!token.startsWith("hf_")) {
    result.error = 'Hugging Face token must start with "hf_"';
    return result;
  }

  // Check token length (hf_ + 31 characters = 34 total)
  if (token.length !== 37) {
    result.error = "Hugging Face token must be exactly 37 characters long";
    return result;
  }

  // Check if the part after 'hf_' contains only alphanumeric characters
  const tokenBody = token.slice(6); // Remove 'hf_' prefix
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  if (!alphanumericRegex.test(tokenBody)) {
    result.error =
      'Hugging Face token can only contain alphanumeric characters after "hf_"';
    return result;
  }

  result.isValid = true;
  return result;
};

export const validateToken = (
  serviceName: allowedProviders,
  token: string
): TokenValidationResult => {
  switch (serviceName) {
    case "huggingface":
      return validateHuggingFaceToken(token);
    case "replicate":
      return validateReplicateToken(token);
    default:
      throw new Error(`Invalid service name: ${serviceName}`);
  }
};
