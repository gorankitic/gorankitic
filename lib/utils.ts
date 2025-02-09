export const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
        return error.message || "An unexpected error occurred.";
    }

    if (typeof error === "string") {
        return error;
    }

    if (typeof error === "object" && error !== null) {
        if ("message" in error && typeof error.message === "string") {
            return error.message;
        }
        if ("error" in error && typeof error.error === "string") {
            return error.error;
        }
        return JSON.stringify(error);
    }

    return "Something went wrong.";
};