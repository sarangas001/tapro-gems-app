import StatusCard from "./StatusCard";

export default function ResultMessage({ status }: { status: string }) {
  switch (status) {
    case "confirmed":
      return (
        <StatusCard eyebrow="Subscribed" title="You are on the list">
          Thank you. Your subscription is confirmed and we will email you when we publish a new gemstone or jewellery
          piece. You can unsubscribe at any time from any email we send.
        </StatusCard>
      );
    case "used":
      return (
        <StatusCard eyebrow="Already confirmed" title="This link has already been used">
          Your confirmation link was used before, so there is nothing more to do. If you have since unsubscribed, you
          can subscribe again from the footer of our website.
        </StatusCard>
      );
    case "expired":
      return (
        <StatusCard eyebrow="Link expired" title="This confirmation link has expired">
          Confirmation links are valid for 48 hours. Please subscribe again from the footer of our website and we will
          send you a fresh link.
        </StatusCard>
      );
    case "error":
      return (
        <StatusCard eyebrow="Something went wrong" title="We could not process your request">
          Please try the link again in a few minutes.
        </StatusCard>
      );
    default:
      return (
        <StatusCard eyebrow="Invalid link" title="We could not verify this link">
          This confirmation link is not valid. Please subscribe again from the footer of our website to receive a new
          one.
        </StatusCard>
      );
  }
}
