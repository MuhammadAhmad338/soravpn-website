import React from "react";

export const metadata = {
    title: "Terms of Service | SoraVPN",
    description: "Read the Terms of Service for using SoraVPN.",
};

export default function TermsOfServicePage() {
    return (
        <>
            <div className="mb-12 pt-16 pb-12 bg-orange-500 items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">
                    Terms and Services
                </h1>
                <p className="text-sm text-white text-center mb-12">
                    Last updated: October 7, 2025
                </p>
            </div>

            <section className="space-y-6 leading-relaxed max-w-4xl mx-auto px-6 pb-12">
                <p>
                    Welcome to <strong>SoraVPN</strong> (“we”, “our”, or “us”). These Terms
                    of Service (“Terms”) govern your use of our website and VPN services.
                    By accessing or using SoraVPN, you agree to comply with these Terms.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    1. Acceptance of Terms
                </h2>
                <p>
                    By using SoraVPN, you confirm that you are at least 18 years old and
                    agree to these Terms and our Privacy Policy. If you do not agree, do
                    not use our services.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    2. Our Services
                </h2>
                <p>
                    SoraVPN provides encrypted virtual private network (VPN) connections
                    to help protect your privacy online. We reserve the right to modify or
                    discontinue the service at any time without prior notice.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    3. No-Logs Policy
                </h2>
                <p>
                    We operate under a strict <strong>no-logs policy</strong>. We do not
                    monitor or record your internet activity, browsing history, IP
                    addresses, or DNS queries while connected to our VPN servers.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    4. User Responsibilities
                </h2>
                <p>When using our services, you agree that you will NOT:</p>
                <ul className="list-disc pl-8">
                    <li>Use SoraVPN for illegal or malicious purposes</li>
                    <li>Engage in spam, hacking, or distribution of malware</li>
                    <li>Violate intellectual property or copyright laws</li>
                    <li>Interfere with the normal operation of our servers</li>
                </ul>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    5. Accounts and Payments
                </h2>
                <p>
                    You must create an account to use premium features. You are
                    responsible for maintaining the confidentiality of your login
                    credentials. All payments are securely processed through third-party
                    providers (e.g., Stripe, PayPal, or Paddle). We do not store your
                    payment information.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    6. Refund Policy
                </h2>
                <p>
                    We may offer refunds under certain conditions defined in our refund
                    policy. Contact{" "}
                    <a
                        href="mailto:support@soravpn.com"
                        className="text-blue-400 hover:underline"
                    >
                        support@soravpn.com
                    </a>{" "}
                    for refund requests.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    7. Intellectual Property
                </h2>
                <p>
                    All website content, design, and software related to SoraVPN are owned
                    by us or our licensors. You may not copy, modify, or distribute our
                    materials without written permission.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    8. Limitation of Liability
                </h2>
                <p>
                    SoraVPN is provided “as is” without warranties of any kind. We are not
                    liable for damages arising from service interruptions, data loss, or
                    unauthorized access caused by third parties.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    9. Termination
                </h2>
                <p>
                    We may suspend or terminate your account if you violate these Terms or
                    misuse our services. You may stop using SoraVPN at any time.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    10. Changes to These Terms
                </h2>
                <p>
                    We may update these Terms periodically. Continued use of SoraVPN after
                    changes indicates your acceptance of the updated Terms.
                </p>

                <h2 className="text-2xl font-semibold text-black mt-8">
                    11. Contact Us
                </h2>
                <p>
                    For any questions about these Terms, please email us at{" "}
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
