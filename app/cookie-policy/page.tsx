import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Cookie Policy — Season of Self",
};

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="1 April 2026">
      <h2 className="font-display text-2xl text-ink mb-4 mt-10">What Are Cookies</h2>
      <p className="mb-4">
        Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit our website. These files contain information about your browsing activity and preferences. They help websites remember information about you and improve your experience when you return.
      </p>
      <p className="mb-4">
        At Season of Self, we use cookies to enhance your experience, understand how you interact with our site, and provide you with relevant content and services. We're committed to being transparent about how we use these technologies.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">How We Use Cookies</h2>
      <h3 className="font-sans font-semibold text-ink mb-2 mt-6">Essential and Functional Cookies</h3>
      <p className="mb-4">
        These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility. Essential cookies don't require your consent because they're necessary for the site to work. Functional cookies enhance your experience by remembering your preferences, such as your language choice or items in your cart.
      </p>

      <h3 className="font-sans font-semibold text-ink mb-2 mt-6">Analytics Cookies</h3>
      <p className="mb-4">
        We use Google Analytics 4 (GA4) to understand how visitors interact with our website. These cookies collect anonymous data about page views, user behavior, and traffic patterns. This information helps us improve our content, courses, and overall user experience. The measurement ID associated with our GA4 account is used to track aggregated, de-identified information. You can learn more about how Google Analytics works and your privacy options by visiting Google's privacy page.
      </p>

      <h3 className="font-sans font-semibold text-ink mb-2 mt-6">Marketing Cookies</h3>
      <p className="mb-4">
        We use marketing cookies to deliver personalized content and to understand the effectiveness of our marketing efforts. These cookies help us show you relevant information about our courses, coaching, and community offerings. They may track your interactions across our website and partner sites to provide you with targeted content.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Third-Party Cookies</h2>
      <p className="mb-4">
        Our website integrates with several third-party services that may set their own cookies on your device. These third-party providers use cookies to deliver services and measure their effectiveness.
      </p>
      <p className="mb-4">
        <strong>Google Analytics:</strong> We use Google Analytics 4 to track and analyze website traffic. Google may use cookies and similar technologies to collect and analyze information about your use of our site. Please review Google's privacy policy for more information about how they handle your data.
      </p>
      <p className="mb-4">
        <strong>Kit (formerly ConvertKit):</strong> We use Kit for email marketing and newsletter services. If you subscribe to our mailing list, Kit may set cookies to manage your subscription and deliver relevant content. Visit Kit's privacy policy to learn more about their practices.
      </p>
      <p className="mb-4">
        <strong>Vimeo:</strong> Our website may embed video content from Vimeo. Vimeo sets cookies to track video performance and user engagement. Review Vimeo's privacy policy for details about their cookie usage.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Managing Cookies</h2>
      <p className="mb-4">
        You have the right to control and manage cookies on your device. Most web browsers allow you to refuse cookies or alert you when a cookie is being set. Here's how to manage cookies in popular browsers:
      </p>
      <p className="mb-4">
        <strong>Chrome:</strong> Click the menu icon, select "Settings," then "Privacy and security" and "Cookies and other site data." You can choose to block all cookies or allow specific sites to set cookies.
      </p>
      <p className="mb-4">
        <strong>Firefox:</strong> Click the menu button, select "Settings," then "Privacy & Security." Under "Cookies and Site Data," you can manage your preferences.
      </p>
      <p className="mb-4">
        <strong>Safari:</strong> Click "Safari" in the menu, select "Preferences," then "Privacy." You can choose your cookie settings there.
      </p>
      <p className="mb-4">
        <strong>Edge:</strong> Click the menu icon, select "Settings," then "Privacy, search, and services." Scroll to "Cookies and other site data" to manage your preferences.
      </p>
      <p className="mb-4">
        Please note that blocking or disabling cookies may affect the functionality of our website and limit your ability to access certain features or services. Some features of seasonofself.co may not work properly if cookies are disabled.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of our website following any changes constitutes your acceptance of the updated Cookie Policy.
      </p>

      <h2 className="font-display text-2xl text-ink mb-4 mt-10">Contact</h2>
      <p className="mb-4">
        If you have questions or concerns about our use of cookies or this Cookie Policy, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Season of Self LLC</strong><br />
        312 W 2nd St, Unit #A8972<br />
        Casper, WY 82601<br />
        Email: charlotte@suntouched.co<br />
        Website: seasonofself.co
      </p>
    </LegalPage>
  );
}
