const commonResultStatus = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
} as const;

type CommonResultStatus =
  (typeof commonResultStatus)[keyof typeof commonResultStatus];

export default commonResultStatus;
export type { CommonResultStatus };
