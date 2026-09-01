import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Refund & Cancellation Policy · Season of Self",
};

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund & Cancellation Policy" lastUpdated="1 September 2026">
      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Your Next Season</h2>
      <p className="mb-4">
        Your Next Season is a self-paced digital course. Pricing and payment options, including any installment plan, are shown on the sales page and at checkout at the time of purchase.
      </p>
      <p className="mb-4">
        Access includes the course materials and any related community or bonus resources specifically listed on the sales page at the time you enroll.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Refunds</h2>
      <p className="mb-4">
        If a specific refund window, guarantee, or special purchase term is stated on the sales page or at checkout when you buy, that stated policy governs your purchase.
      </p>
      <p className="mb-4">
        If no separate refund promise is stated at the time of purchase, digital-course purchases are non-refundable once access has been granted, except where required by law. If you choose an installment plan, you remain responsible for completing the scheduled payments unless we agree otherwise in writing.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">How to Request a Refund</h2>
      <p className="mb-4">
        Send an email to hello@seasonofself.co with the subject line "Refund Request" and include your name, the email address used at checkout, and the date of your payment. Once we receive your request, we'll review it against the policy that applied to your purchase and respond as promptly as we can.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Other Offerings</h2>
      <p className="mb-4">
        Refund eligibility for other offerings, such as The Inner Map, retreats, or one-on-one sessions, may vary depending on their nature and is communicated at the time of purchase. If you have questions about your specific situation or believe there are extenuating circumstances, please reach out to us directly at hello@seasonofself.co, and we'll do our best to work with you.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Processing Time</h2>
      <p className="mb-4">
        Once we approve your refund request, we typically process the refund within 5-7 business days. The refund will be issued to your original payment method. Depending on your financial institution, it may take an additional 1-2 business weeks for the funds to appear in your account.
      </p>
      <p className="mb-4">
        If you don't see the refund within the expected timeframe, please check with your bank or payment provider first, as processing delays can sometimes occur on their end. If you have concerns, reach out to us and we'll investigate further.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Contact</h2>
      <p className="mb-4">
        If you have questions about our refund policy or need to request a refund, please contact us:
      </p>
      <p className="mb-4">
        <strong>Season of Self LLC</strong><br />
        312 W 2nd St, Unit #A8972<br />
        Casper, WY 82601<br />
        Email: hello@seasonofself.co<br />
        Website: seasonofself.co
      </p>
    </LegalPage>
  );
}
