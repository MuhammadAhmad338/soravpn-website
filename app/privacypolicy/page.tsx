import React from "react";

export const metadata = {
    title: "Privacy Policy | SoraVPN",
    description: "Read SoraVPN's Privacy Policy and learn how we protect your data.",
};

export default function PrivacyPolicy() {
    return (
        <>
            <div className="mb-12 pt-16 pb-12 bg-orange-500 items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">
                    Privacy Policy
                </h1>
                <p className="text-sm text-white text-center mb-12">
                    Last updated: October 7, 2025
                </p>
            </div>

            <section className="space-y-6 leading-relaxed max-w-4xl mx-auto px-6 pb-12">
                <p>
                    Welcome to <strong className="text-xl">SoraVPN</strong> (“we”, “our”, “us”). Your privacy
                    is very important to us. This Privacy Policy explains how we collect,
                    use, and protect your information when you use our VPN services and
                    website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">
                    1. Information We Do Not Collect
                </h2>
                <p>
                    At SoraVPN, we follow a strict <strong>no-logs policy</strong>. We do
                    not collect, store, or monitor:
                </p>
                <ul className="list-disc pl-8">
                    <li>Your browsing history</li>
                    <li>The websites or apps you access</li>
                    <li>Your DNS queries or VPN traffic data</li>
                    <li>Connection timestamps or session duration</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">
                    2. Information We May Collect
                </h2>
                <p>
                    We only collect minimal data required to operate our services
                    securely:
                </p>
                <ul className="list-disc pl-8">
                    <li>
                        <strong>Account Information:</strong> Email address for account
                        registration and support
                    </li>
                    <li>
                        <strong>Payment Data:</strong> Processed securely via third-party
                        payment gateways (we never store card details)
                    </li>
                    <li>
                        <strong>Diagnostics (Optional):</strong> Anonymous crash reports or
                        performance data, only if you enable them
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">
                    3. How We Use Your Information
                </h2>
                <p>We use limited data only to:</p>
                <ul className="list-disc pl-8">
                    <li>Provide and maintain the VPN service</li>
                    <li>Communicate updates or account-related information</li>
                    <li>Improve performance and reliability</li>
                </ul>
                <p>We never sell or share your data for advertising purposes.</p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">
                    4. Payment Processing
                </h2>
                <p>
                    All payments are handled by trusted processors such as Stripe, PayPal,
                    or Paddle. Please review their privacy policies for more information.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">5. Cookies</h2>
                <p>
                    Our website may use cookies to remember preferences and analyze
                    anonymous usage data. You can disable cookies anytime in your browser
                    settings.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">
                    6. Data Security
                </h2>
                <p>
                    We apply industry-standard encryption and security measures to protect
                    your data from unauthorized access or disclosure.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">
                    7. Your Rights
                </h2>
                <p>
                    Depending on your region, you may have the right to access, update, or
                    delete your data. To exercise these rights, contact us at{" "}
                    <a
                        href="mailto:support@soravpn.com"
                        className="text-blue-400 hover:underline"
                    >
                        support@soravpn.com
                    </a>
                    .
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">
                    8. Policy Updates
                </h2>
                <p>
                    We may update this Privacy Policy occasionally. The updated version
                    will always be posted on this page with a new “Last updated” date.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8">
                    9. Contact Us
                </h2>
                <p>
                    If you have questions about this Privacy Policy, please email us at{" "}
                    <a
                        href="mailto:support@soravpn.com"
                        className="text-blue-400 hover:underline"
                    >
                        support@soravpn.com
                    </a>
                    .
                </p>
            </section>
        </>
    );
}
